import ProductCard from "../../../components/common/ProductCard.tsx";
import "../../../styles/pages/home/featured-products-section.css"
import {products} from "../../../data/products.ts";

export default function FeaturedProductsSection() {
    return (
        <section className="home-products-section">
            <div className="container">
                <div className="home-products-heading">
                    <div>
                        <span>Tuyển chọn chất lượng cao</span>
                        <h2>Cây giống nổi bật</h2>
                        <p>Được kiểm định bầu rễ và tình trạng sâu bệnh trước khi xuất kho.</p>
                    </div>

                    <div className="home-product-tabs">
                        <button className="active">Tất cả</button>
                        <button>Cây ăn trái</button>
                        <button>Rau củ F1</button>
                        <button>Hoa & Thảo mộc</button>
                    </div>
                </div>

                <div className="home-product-grid">
                    {products.slice(0, 8).map((product) => (
                        <ProductCard key={product.name}{...product}/>
                    ))}
                </div>

                <div className="home-products-more">
                    <a href="/products">Xem tất cả hơn 200+ giống cây →</a>
                </div>
            </div>
        </section>
    );
}