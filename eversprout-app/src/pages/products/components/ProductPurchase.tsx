import type { Product } from "../../../data/products";
import { formatPrice } from "../../../data/cart";

interface ProductPurchaseProps {
    product: Product;
}

export default function ProductPurchase({
    product
}: ProductPurchaseProps) {
    const discountPercent = product.oldPrice > product.price? Math.round( ((product.oldPrice - product.price) / product.oldPrice) * 100): 0;
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
                    <strong className="purchase-price">{formatPrice(product.price)}</strong>
                    {discountPercent > 0 && (
                        <>
                            <del>{formatPrice(product.oldPrice)}</del>
                            <span className="purchase-discount"> Giảm {discountPercent}%</span>
                        </>
                    )}
                </div>
                <p>Giá bán sản phẩm tại EverSprout.</p>
            </div>
        </div>
    );
}
