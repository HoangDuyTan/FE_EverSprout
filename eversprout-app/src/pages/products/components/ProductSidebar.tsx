import {categories} from "../../../data/products";

import "../../../styles/pages/products/product-sidebar.css";

interface ProductSidebarProps {
    selectedCategories: string[];
    priceRange: string;
    onCategoryChange: (category: string) => void;
    onPriceChange: (value: string) => void;
    onReset: () => void;
}

const priceRanges = [
    {
        label: "Tất cả mức giá",
        value: "all"
    },
    {
        label: "Dưới 30.000đ",
        value: "under-30000"
    },
    {
        label: "30.000đ - 60.000đ",
        value: "30000-60000"
    },
    {
        label: "60.000đ - 100.000đ",
        value: "60000-100000"
    },
    {
        label: "Trên 100.000đ",
        value: "over-100000"
    }
];

export default function ProductSidebar({
                                           selectedCategories,
                                           priceRange,
                                           onCategoryChange,
                                           onPriceChange,
                                           onReset
                                       }: ProductSidebarProps) {
    return (
        <aside className="product-sidebar">
            <div className="product-sidebar-block">
                <h3>Danh mục cây giống</h3>

                <ul>
                    {categories.map((category) => (
                        <li key={category}>
                            <label>
                                <input type="checkbox" checked={selectedCategories.includes(category)}
                                       onChange={() => onCategoryChange(category)}/>
                                <span>{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="product-sidebar-block">
                <h3>Khoảng giá</h3>

                <div className="product-filter-tags">
                    {priceRanges.map((item) => (
                        <button key={item.value} type="button" className={priceRange === item.value ? "active" : ""}
                                onClick={() => onPriceChange(item.value)}>{item.label}</button>
                    ))}
                </div>
            </div>

            <button className="product-filter-reset" type="button" onClick={onReset}>Xóa bộ lọc</button>
        </aside>
    );
}