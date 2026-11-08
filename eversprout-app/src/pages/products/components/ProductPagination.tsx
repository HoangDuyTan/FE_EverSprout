import "../../../styles/pages/products/product-pagination.css";

interface ProductPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function ProductPagination({
                                              currentPage,
                                              totalPages,
                                              onPageChange
                                          }: ProductPaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from(
        {length: totalPages},
        (_, index) => index + 1
    );

    return (
        <div className="product-pagination">
            <button type="button" disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}>Trước
            </button>

            {pages.map((page) => (
                <button key={page} type="button" className={currentPage === page ? "active" : ""}
                        onClick={() => onPageChange(page)}>{page}</button>
            ))}

            <button type="button" disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}>Sau
            </button>
        </div>
    );
}