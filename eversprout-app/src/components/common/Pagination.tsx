import "../../styles/common/pagination.css"

interface PaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}

export default function Pagination({page, totalPages, onChange}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({length: totalPages}, (_, index) => index + 1);
    return (
        <div className="pagination">
            <button type="button" disabled={page === 1} onClick={() => onChange(page - 1)}>Trước</button>

            {pages.map((item) => (
                <button key={item} type="button" className={page === item ? "active" : ""}
                        onClick={() => onChange(item)}>{item}</button>
            ))}

            <button type="button" disabled={page === totalPages} onClick={() => onChange(page + 1)}>Sau</button>
        </div>
    )
}