import ProductCard from "../../../components/common/ProductCard";
import "../../../styles/pages/products/product-grid.css";
import type { Product } from "../../../data/products";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products, }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="product-empty">
                Không tìm thấy sản phẩm phù hợp.
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} {...product}/>
            ))}
        </div>
    );
}
