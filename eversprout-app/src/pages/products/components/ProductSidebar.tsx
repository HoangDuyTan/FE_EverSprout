import {categories} from "../../../data/products";

import "../../../styles/pages/products/product-sidebar.css";

interface ProductSidebarProps {
    selectedCategories: string[];
    priceRange: string;
    stockStatus?: string;
    ratingFilter?: string;
    onCategoryChange: (category: string) => void;
    onPriceChange: (value: string) => void;
    onStockChange?: (value: string) => void;
    onRatingChange?: (value: string) => void;
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

const stockOptions = [
    {
        label: "Tất cả",
        value: "all"
    },
    {
        label: "Còn nhiều hàng",
        value: "in-stock"
    },
    {
        label: "Sắp hết hàng",
        value: "low-stock"
    }
];

const ratingOptions = [
    {
        label: "Tất cả",
        value: "all"
    },
    {
        label: "Từ 4.8★",
        value: "4.8-plus"
    },
    {
        label: "5★",
        value: "5-star"
    }
];

export default function ProductSidebar({
                                           selectedCategories,
                                           priceRange,
                                           stockStatus,
                                           ratingFilter,
                                           onCategoryChange,
                                           onPriceChange,
                                           onStockChange,
                                           onRatingChange,
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

            {stockStatus && onStockChange && (
                <div className="product-sidebar-block">
                    <h3>Tình trạng hàng</h3>

                    <div className="product-filter-tags">
                        {stockOptions.map((item) => (
                            <button key={item.value} type="button" className={stockStatus === item.value ? "active" : ""}
                                    onClick={() => onStockChange(item.value)}>{item.label}</button>
                        ))}
                    </div>
                </div>
            )}

            {ratingFilter && onRatingChange && (
                <div className="product-sidebar-block">
                    <h3>Đánh giá</h3>

                    <div className="product-filter-tags">
                        {ratingOptions.map((item) => (
                            <button key={item.value} type="button" className={ratingFilter === item.value ? "active" : ""}
                                    onClick={() => onRatingChange(item.value)}>{item.label}</button>
                        ))}
                    </div>
                </div>
            )}

            <button className="product-filter-reset" type="button" onClick={onReset}>Xóa bộ lọc</button>
        </aside>
    );
}
