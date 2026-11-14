import {Heart, ShoppingCart, Star} from "lucide-react";
import "../../styles/common/product-card.css"
import {getCart,addProductToCart,formatPrice,} from "../../data/cart.ts";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

interface ProductCardProps {
    id: number;
    image: string;
    name: string;
    scientificName?: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews?: number;
    sold?: number;
    tag?: string;
    stock?: number;
    origin?: string;
}

export default function ProductCard({id,image, name, scientificName, price, oldPrice, rating, reviews, sold, tag, stock, origin}: ProductCardProps) {
    const navigate = useNavigate();

    function handleAddToCart() {
        const product = products.find((item) => item.id === id);
        if (!product) {
            alert("Không tìm thấy sản phẩm.");
            return false;
        }
        if (product.stock <= 0) {
            alert("Sản phẩm đã hết hàng.");
            return false;
        }

        // check sluong đã có trong giỏ
        const cart = getCart();
        const existingItem = cart.find((item) => item.product.id === id);
        if (existingItem && existingItem.quantity >= product.stock) {
            alert("Bạn đã thêm tối đa số lượng còn trong kho.");
            return false;
        }
        addProductToCart(product);
        return true;
    }
    // button adtocart k reload
    function handleAdd() {
        const success = handleAddToCart();
        if (success) {
            alert("Đã thêm " + name + " vào giỏ hàng!");
        }
    }
    // button mua ngay -> chuyển đến cart
    function handleBuy() {
        const success = handleAddToCart();
        if (success) {
            navigate("/cart");
        }
    }

    return (
        <article className="product-card">
            <div className="product-card-image-wrapper">
                <img src={image} alt={name} className="product-card-image" loading="lazy" />
                {tag && ( <span className="product-card-tag">{tag}</span>)}
                <button type="button" className="product-card-favorite" aria-label="Thêm vào yêu thích" >
                    <Heart size={17} />
                </button>
            </div>
            <div className="product-card-content">
                <div className="product-card-rating">
                    <Star size={13} fill="currentColor" />
                    <strong>{rating}</strong>
                    <span>({sold})</span>
                </div>
                <h3>{name}</h3>
                {scientificName && <p>{scientificName}</p>}
                <div className="product-card-bottom">
                    <strong>{formatPrice(price)}</strong>
                    <div className="product-card-actions">
                        <button type="button" onClick={handleAdd} disabled={stock === 0}>
                            <ShoppingCart size={14} /> Thêm giỏ
                        </button>
                        <button type="button" onClick={handleBuy} disabled={stock === 0} > Mua ngay </button>
                    </div>
                </div>
            </div>
        </article>
    );
}