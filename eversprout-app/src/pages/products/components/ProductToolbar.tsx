import { Search } from "lucide-react";

import "../../../styles/pages/products/product-toolbar.css";

interface ProductToolbarProps {
    searchTerm: string;
    sortOption: string;
    onSearchChange: (value: string) => void;
    onSortChange: (value: string) => void;
}

export default function ProductToolbar({searchTerm, sortOption, onSearchChange, onSortChange}: ProductToolbarProps) {
    return (
        <div className="product-toolbar">
            <div className="product-toolbar-search">
                <Search size={16} />
                <input type="text" value={searchTerm} placeholder="Tìm theo tên cây..." onChange={(event) => onSearchChange(event.target.value)}/>
            </div>

            <div className="product-toolbar-sort">
                <label>Sắp xếp:</label>

                <select value={sortOption} onChange={(event) => onSortChange(event.target.value)}>
                    <option value="best-selling">Bán chạy nhất</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="rating">Đánh giá cao nhất</option>
                    <option value="newest">Mới nhất</option>
                </select>
            </div>
        </div>
    );
}