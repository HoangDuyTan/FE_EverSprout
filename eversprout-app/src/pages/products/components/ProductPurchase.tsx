import type { Product } from "../../../data/products";
import { formatPrice,addProductToCart } from "../../../data/cart";
import {useState} from "react";
import {ShoppingCart } from "lucide-react";

interface ProductPurchaseProps {
    product: Product;
}

export default function ProductPurchase({
    product
}: ProductPurchaseProps) {
    const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? "standard");
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState("");
    const selectedVariant = product.variants?.find((variant) => variant.id === selectedVariantId);
    const price = selectedVariant?.price ?? product.price;
    const totalPrice = price * quantity;
    const showDiscount =selectedVariantId === "standard" && product.oldPrice > price;
    const discountPercent = showDiscount ? Math.round(((product.oldPrice - price) / product.oldPrice) * 100): 0;
    // tăng/ giảm sluong
    function increaseQuantity() {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    }
    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleAddToCart() {
        const success = addProductToCart(product,quantity,selectedVariant);
        if (success) {
            setMessage("Đã thêm sản phẩm vào giỏ hàng!");
        } else {
            setMessage("Số lượng vượt quá tồn kho.");
        }
    }
    console.log("Variants:", product.variants);
    return (
        <div className="product-detail-info">
            <div className="purchase-category">
                <span>{product.category}</span>
                <span> Mã: GS-{String(product.id).padStart(3, "0")}
                </span>
            </div>
            <h1 className="purchase-title">{product.name} </h1>
            <p className="purchase-scientific">{product.scientificName} - {product.tag} </p>
            <div className="purchase-rating">
                <span className="purchase-stars">★★★★★</span>
                <strong>{product.rating}</strong>
                <span>({product.reviews} đánh giá)</span>
                <span>· {product.sold} đã bán</span>
                <span className="purchase-stock">· {product.stock > 0? `Còn ${product.stock} sản phẩm` : "Hết hàng"}</span>
            </div>
            <div className="purchase-price-box">
                <div className="purchase-price-row">
                    <strong className="purchase-price">{formatPrice(price)}</strong>
                    {showDiscount && (
                        <>
                            <del>{formatPrice(product.oldPrice)}</del>
                            <span className="purchase-discount">Giảm {discountPercent}%</span>
                        </>
                    )}
                </div>
                <p>Giá bán sản phẩm tại EverSprout.</p>
            </div>
            {/*kvuc chọn kích thước*/}
            {product.variants && product.variants.length > 0 && (
                <div className="purchase-variants">
                    <h3>Kích thước chiều cao cây:</h3>
                    <div className="purchase-variant-list">
                        {product.variants.map((variant) => (
                            <button key={variant.id} type="button"
                                className={`purchase-variant ${selectedVariantId === variant.id ? "active" : ""}`}
                                onClick={() => setSelectedVariantId(variant.id)}>

                                <strong>{variant.name}</strong>
                                <small>{variant.description}</small>
                                <span>{formatPrice(variant.price)}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {/*sluong*/}
            <div className="purchase-quantity-section">
                <h3>Số lượng đặt mua:</h3>
                <div className="purchase-quantity-row">
                    <div className="purchase-quantity">
                        <button type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>  -</button>
                        <span>{quantity}</span>
                        <button type="button" onClick={increaseQuantity} disabled={quantity >= product.stock}>  +</button>
                    </div>
                    <p> Tổng tạm tính: <strong> {formatPrice(totalPrice)}</strong></p>
                </div>
            </div>

            <div className="purchase-actions">
                <button type="button" className="purchase-add-btn" onClick={handleAddToCart} disabled={product.stock <= 0} >
                    <ShoppingCart size={18} />
                    Thêm vào giỏ hàng
                </button>
            </div>
            {message && ( <p className="purchase-message" role="status"> {message} </p>)}
        </div>
    );
}
