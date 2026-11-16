import ProductCard from "../../../components/common/ProductCard.tsx";
import "../../../styles/pages/home/featured-products-section.css"
import {products} from "../../../data/products.ts";
import {useState} from "react";
import {Link} from "react-router-dom";

const productTabs = [
    {
        label: "Tất cả",
        value: "all"
    },
    {
        label: "Cây ăn trái",
        value: "Cây ăn trái"
    },
    {
        label: "Rau hữu cơ",
        value: "Cây rau hữu cơ mầm"
    },
    {
        label: "Hoa kiểng",
        value: "Cây hoa kiểng & Leo giàn"
    }
];

export default function FeaturedProductsSection() {
    const [activeTab, setActiveTab] = useState("all");
    const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab);
    const viewAll = activeTab === "all" ? "/products" : `/products?category=${encodeURIComponent(activeTab)}`;

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
                        {productTabs.map((tab) => (
                            <button key={tab.value} type="button"
                                    className={activeTab === tab.value ? "active" : ""}
                                    onClick={() => setActiveTab(tab.value)}>{tab.label}</button>
                        ))}
                    </div>
                </div>

                <div className="home-product-grid">
                    {filteredProducts.slice(0, 8).map((product) => (
                        <ProductCard key={product.id} {...product}></ProductCard>
                    ))}
                </div>

                <div className="home-products-more">
                    <Link to={viewAll}>{activeTab === "all" ? "Xem tất cả sản phẩm →" : `Xem tất cả ${activeTab} →`}</Link>
                </div>
            </div>
        </section>
    );
}