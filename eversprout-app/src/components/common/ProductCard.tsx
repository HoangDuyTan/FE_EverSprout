import {Heart, ShoppingCart, Star} from "lucide-react";
import "../../styles/common/product-card.css"

interface ProductCardProps {
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

export default function ProductCard({image, name, scientificName, price, oldPrice, rating, reviews, sold, tag, stock, origin}: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-card-image-wrapper">
                <img src={image} alt={name} className="product-card-image" loading="lazy"/>
                {tag && (<span className="product-card-tag">{tag}</span>)}
                <button type="button" className="product-card-favorite" aria-label="Thêm vào yêu thích"><Heart size={17}/></button>
            </div>

            <div className="product-card-content">
                <div className="product-card-rating">
                    <Star size={13} fill="currentColor"/>
                    <strong>{rating}</strong>
                    <span>({sold})</span>
                </div>

                <h3>{name}</h3>

                {scientificName && (<p>{scientificName}</p>)}

                <div className="product-card-bottom">
                    <strong>{price}đ</strong>
                    <button type="button"><ShoppingCart size={14}/>Mua</button>
                </div>
            </div>
        </article>
    );
}