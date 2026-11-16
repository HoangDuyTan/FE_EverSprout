import {guideCategories} from "../../../data/guides";

import "../../../styles/pages/guides/guide-filter.css";

interface GuideFilterProps {
    category: string;
    onCategory: (value: string) => void;
    onReset: () => void;
}

export default function GuideFilter({category, onCategory, onReset}: GuideFilterProps) {
    return (
        <aside className="guide-filter">
            <h3>Chủ đề cẩm nang</h3>

            <div className="guide-filter-list">
                <button type="button" className={category === "all" ? "active" : ""}
                        onClick={() => onCategory("all")}>Tất cả
                </button>

                {guideCategories.map((item) => (
                    <button key={item} type="button" className={category === item ? "active" : ""}
                            onClick={() => onCategory(item)}>{item}</button>
                ))}
            </div>

            <button type="button" className="guide-reset-btn" onClick={onReset}>Xóa bộ lọc</button>
        </aside>
    );
}