import { useMemo, useState } from "react";

import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ProductToolbar from "./components/ProductToolbar";
import ProductSidebar from "./components/ProductSidebar";
import ProductGrid from "./components/ProductGrid";
import ProductPagination from "./components/ProductPagination";

import { products } from "../../data/products";

import "../../styles/pages/products/product-listing-page.css";

const PRODUCTS_PER_PAGE = 6;

export default function ProductListingPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState("all");
    const [sortOption, setSortOption] = useState("best-selling");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = useMemo(() => {
        let res = [...products];

        if (searchTerm.trim()) {
            const keyword = searchTerm.toLowerCase();

            res = res.filter((product) =>
                product.name.toLowerCase().includes(keyword) ||
                product.scientificName.toLowerCase().includes(keyword) ||
                product.origin.toLowerCase().includes(keyword)
            );
        }

        // Filter
        if (selectedCategories.length > 0) {
            res = res.filter((product) => selectedCategories.includes(product.category));
        }

        if (priceRange === "under-30000") {
            res = res.filter((product) => product.price < 30000);
        }

        if (priceRange === "30000-60000") {
            res = res.filter((product) => product.price >= 30000 && product.price <= 60000);
        }

        if (priceRange === "60000-100000") {
            res = res.filter((product) => product.price > 60000 && product.price <= 100000);
        }

        if (priceRange === "over-100000") {
            res = res.filter((product) => product.price > 100000);
        }

        // Sort
        if (sortOption === "best-selling") {
            res.sort((a, b) => b.sold - a.sold);
        }

        if (sortOption === "price-asc") {
            res.sort((a, b) => a.price - b.price);
        }

        if (sortOption === "price-desc") {
            res.sort((a, b) => b.price - a.price);
        }

        if (sortOption === "rating") {
            res.sort((a, b) => b.rating - a.rating);
        }

        if (sortOption === "newest") {
            res.sort((a, b) => b.id - a.id);
        }

        return res;
    }, [
        searchTerm,
        selectedCategories,
        priceRange,
        sortOption
    ]);

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    const handleSortChange = (value: string) => {
        setSortOption(value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((current) => {
            if (current.includes(category)) {
                return current.filter(
                    (item) => item !== category
                );
            }

            return [...current, category];
        });

        setCurrentPage(1);
    };

    const handlePriceChange = (value: string) => {
        setPriceRange(value);
        setCurrentPage(1);
    };

    const handleResetFilters = () => {
        setSearchTerm("");
        setSelectedCategories([]);
        setPriceRange("all");
        setSortOption("best-selling");
        setCurrentPage(1);
    };

    return (
        <>
            <Header />
            <Navbar />

            <main className="product-listing-page">
                <div className="container">
                    <div className="product-page-heading">
                        <div>
                            <span className="product-page-label">Danh sách cây giống</span>
                            <h1>Cây giống khỏe thuần chủng F1</h1>
                        </div>

                        <span className="product-count">{filteredProducts.length} sản phẩm</span>
                    </div>

                    <ProductToolbar
                        searchTerm={searchTerm}
                        sortOption={sortOption}
                        onSearchChange={handleSearchChange}
                        onSortChange={handleSortChange}
                    />

                    <div className="product-page-content">
                        <ProductSidebar
                            selectedCategories={selectedCategories}
                            priceRange={priceRange}
                            onCategoryChange={handleCategoryChange}
                            onPriceChange={handlePriceChange}
                            onReset={handleResetFilters}
                        />

                        <div className="product-page-main">
                            <ProductGrid products={currentProducts}/>

                            <ProductPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}