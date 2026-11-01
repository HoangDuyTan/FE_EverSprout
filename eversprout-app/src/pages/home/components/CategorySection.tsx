import CategoryCard from "../../../components/common/CategoryCard.tsx";
import {Apple, Flower2, House, Leaf, Sprout} from "lucide-react";
import "../../../styles/pages/home/category-section.css"

export default function CategorySection() {
    return (
        <section className="home-category-section">
            <div className="container">
                <div className="home-section-heading">
                    <div>
                        <span>Phân loại cây trồng</span>
                        <h2>Danh mục nổi bật</h2>
                    </div>

                    <a href="/categories">Xem tất cả danh mục →</a>
                </div>

                <div className="home-category-grid">
                    <CategoryCard icon={Apple} title="Cây ăn trái" count="85+ giống"/>
                    <CategoryCard icon={Sprout} title="Cây rau giống" count="42+ loại"/>
                    <CategoryCard icon={Flower2} title="Cây hoa kiểng" count="38+ loại"/>
                    <CategoryCard icon={House} title="Cây trong nhà" count="25+ loại"/>
                    <CategoryCard icon={Leaf} title="Dược liệu & Gia vị" count="18+ loại"/>
                </div>
            </div>
        </section>
    );
}