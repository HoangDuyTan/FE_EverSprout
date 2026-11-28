import {useEffect, useState} from "react";

import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {getProducts} from "../../service/productService";
import type {Product} from "../../data/products";
import {getCart, saveCart, formatPrice,addProductToCart,getCartItemKey,getCartItemPrice} from "../../data/cart";
import type {CartItem as CartItemType} from "../../data/cart";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import CartRecommendations from "./components/CartRecommendations";
import "../../styles/pages/cart/cart.css";

function CartPage() {
    // state qlý Cart
    const [cart, setCart] = useState<CartItemType[]>(getCart);

    // state qlý voucher
    const [coupon, setCoupon] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const [message, setMessage] = useState("");

    const [products, setProducts] = useState<Product[]>([]);

    // update Cart khi dlieu thay đổi
    useEffect(() => {
        saveCart(cart);
    }, [cart]);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch(() => {
                setMessage("Không thể tải sản phẩm.");
            });
    }, []);

    //tăng sluongF
    function increaseQuantity(key: string) {
        const selectedItem = cart.find((item) => getCartItemKey(item) === key);
        if (!selectedItem) return;

        const totalQuantity = cart.filter((item) => item.product.id === selectedItem.product.id)
            .reduce((sum, item) => sum + item.quantity, 0);
        if (totalQuantity >= selectedItem.product.stock) {
            setMessage("Sản phẩm đã đạt giới hạn tồn kho.");
            return;
        }

        const newCart = cart.map((item) => {
            if (getCartItemKey(item) === key) {
                return {...item,quantity: item.quantity + 1
                };
            }
            return item;
        });
        setCart(newCart);
        setMessage("Đã tăng số lượng sản phẩm.");
    }

    // giảm sluong
    function decreaseQuantity(key: string) {
        const newCart = cart.map((item) => {
            if (
                getCartItemKey(item) === key &&item.quantity > 1) {
                return {...item,quantity: item.quantity - 1};
            }
            return item;
        });
        setCart(newCart);
        setMessage("Đã giảm số lượng sản phẩm.");
    }

    //xóa sp
    function removeItem(key: string) {
        const newCart = cart.filter(
            (item) => getCartItemKey(item) !== key
        );

        setCart(newCart);
        setMessage("Đã xóa sản phẩm khỏi giỏ hàng.");
    }

    // them sp mua kèm
    function addItem(product: Product) {
        const success = addProductToCart(product);
        if (!success) {
            setMessage("Sản phẩm đã đạt giới hạn tồn kho.");
            return;
        }
        setCart(getCart());
        setMessage("Đã thêm " + product.name + " vào giỏ.");
    }

    // áp dụng mã giảm giá
    function applyCoupon() {
        if (coupon.trim().toUpperCase() === "MAXANH10") {
            setCouponApplied(true);
            setMessage("Áp dụng mã giảm giá thành công!");
        } else {
            setCouponApplied(false);
            setMessage("Mã giảm giá không hợp lệ.");
        }
    }

    //tạm tính
    const subtotal= cart.reduce((sum,item) => {
        return sum+ getCartItemPrice(item)* item.quantity;
    },0);

    //phí vận chuyển
    let shipping = 30000;
    if (subtotal === 0 || subtotal >= 300000) {
        shipping = 0;
    }

    //tính giảm giá
    let discount = 0;
    if (couponApplied) {
        discount = Math.round(subtotal * 0.1);
    }

    //Tổng thanh toán
    const total = subtotal + shipping - discount;

    //số tiền còn thiếu để được-> miễn phí giao hàng
    const remaining = Math.max(0, 300000 - subtotal);

    function addDemoProducts() {
        if (products.length < 3) {
            setMessage("Chưa tải đủ sản phẩm.");
            return;
        }

        setCart([
            {product: products[0], quantity: 2},
            {product: products[1], quantity: 3},
            {product: products[2], quantity: 1},
        ]);

        setCouponApplied(false);
        setMessage("Đã tạo giỏ hàng mẫu để kiểm thử.");
    }

    function checkout() {
        alert("Chức năng thanh toán chưa được xây dựng.\n" + "Tổng thanh toán: " + formatPrice(total));
    }

    return (
        <>
            <Header/>
            <Navbar/>
            <main className="cart-page">
                <div className="container">
                    {/*title */}
                    <div className="cart-top">
                        <div>
                            <p className="cart-breadcrumb">
                                <a href="/">Trang chủ</a> / Giỏ hàng của bạn
                            </p>
                            <div className="cart-title">
                                <h1>Giỏ hàng của bạn</h1>
                                <span>{cart.length} sản phẩm</span>
                            </div>
                        </div>
                        <div className="cart-steps">
                            <strong>1. Giỏ hàng</strong>
                            <span>→ 2. Thanh toán</span>
                            <span>→ 3. Hoàn tất</span>
                        </div>
                    </div>
                    {/*Tbao free vận chuyển */}
                    <div className="cart-shipping-banner">
                        <h3> {remaining === 0 ? "Bạn đã đủ điều kiện miễn phí giao hàng!" : "Mua thêm " + formatPrice(remaining) + " để được miễn phí giao hàng"} </h3>
                        <p>Miễn phí vận chuyển cho đơn từ 300.000đ.</p>
                        <div className="cart-progress">
                            <div style={{width: Math.min((subtotal / 300000) * 100, 100) + "%",}}/>
                        </div>
                    </div>
                    {/* Tbao hành động */}
                    {message && (
                        <div className="cart-message" role="status">
                            <span>{message}</span>
                            <button  type="button" onClick={() => setMessage("")} aria-label="Đóng thông báo"> × </button>
                        </div>
                    )}

                    <div className="cart-layout">
                        {/* Column left */}
                        <div className="cart-left">
                            <div className="cart-table">
                                <div className="cart-table-header">
                                    <span>SẢN PHẨM CÂY GIỐNG</span>
                                    <span>ĐƠN GIÁ</span>
                                    <span>SỐ LƯỢNG</span>
                                    <span>THÀNH TIỀN</span>
                                    <span></span>
                                </div>
                                {cart.length > 0
                                    ? (cart.map((item) => (
                                        <CartItem
                                            key={getCartItemKey(item)} item={item} onIncrease={increaseQuantity}
                                            onDecrease={decreaseQuantity} onRemove={removeItem}
                                            canIncrease={ cart.filter((other) => other.product.id === item.product.id)
                                                    .reduce((sum, other) => sum + other.quantity, 0) < item.product.stock }/>
                                    )))
                                    : (<div className="cart-empty">
                                            <h3>Giỏ hàng đang trống</h3>
                                            <p>Hãy chọn một vài cây giống nhé!</p>
                                            <a href="/products"> Khám phá sản phẩm</a>
                                            <button type="button" onClick={addDemoProducts}>
                                                Tạo giỏ hàng mẫu (3 sản phẩm)
                                            </button>
                                        </div>
                                    )}
                            </div>
                            {/*Tiếp tục mua && nhập mã */}
                            <div className="cart-actions">
                                <a href="/products"> ← Tiếp tục chọn cây giống </a>
                                <form className="cart-coupon"
                                      onSubmit={(e) => {
                                          e.preventDefault();
                                          applyCoupon();
                                      }}
                                >
                                    <input type="text" placeholder="Nhập mã giảm giá" value={coupon}
                                           onChange={(e) => setCoupon(e.target.value)}
                                    />
                                    <button type="submit"> Áp dụng </button>
                                </form>
                            </div>

                            {/*Gợi ý sp */}
                            <CartRecommendations cart={cart} products={products} onAdd={addItem}/>
                        </div>
                        {/* Column right */}
                        <div className="cart-right">
                            <CartSummary subtotal={subtotal}
                                         shipping={shipping}
                                         discount={discount}
                                         total={total}
                                         onCheckout={checkout} />

                            <div className="cart-help">
                                <h3>Cần hướng dẫn trồng cây?</h3>
                                <p>
                                    Đội ngũ EverSprout sẵn sàng hỗ trợ
                                    bạn lựa chọn và chăm sóc cây giống.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default CartPage;
