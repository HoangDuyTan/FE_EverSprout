import {Search} from "lucide-react";

import "../../../styles/pages/guides/guide-toolbar.css";

interface GuideToolbarProps {
    search: string;
    sort: string;
    onSearch: (value: string) => void;
    onSort: (value: string) => void;
}

export default function GuideToolbar({search, sort, onSearch, onSort}: GuideToolbarProps) {
    return (
        <div className="guide-toolbar">
            <div className="guide-search">
                <Search size={16}/>
                <input type="text" value={search} placeholder="Tìm bài hướng dẫn..."
                       onChange={(e) => onSearch(e.target.value)}/>
            </div>

            <div className="guide-sort">
                <label>Sắp xếp:</label>

                <select value={sort} onChange={(e) => onSort(e.target.value)}>
                    <option value="newest">Mới nhất</option>
                    <option value="popular">Xem nhiều nhất</option>
                    <option value="quick">Đọc nhanh nhất</option>
                </select>
            </div>
        </div>
    );
}