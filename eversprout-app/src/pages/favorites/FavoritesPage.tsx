import {useEffect, useMemo, useState} from "react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductToolbar from "../products/components/ProductToolbar";
import ProductSidebar from "../products/components/ProductSidebar";
import ProductGrid from "../products/components/ProductGrid";
import Pagination from "../../components/common/Pagination";
import type {Product} from "../../data/products";
import {getFavorites} from "../../data/favorites";
import {getProducts} from "../../service/productService";
import "../../styles/pages/products/product-listing-page.css";
import "../../styles/pages/favorites/favorites-page.css";

const PRODUCTS_PER_PAGE = 6;

export default function FavoritesPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState("all");
    const [sortOption, setSortOption] = useState("best-selling");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        function updateFavorites() {
            setFavoriteIds(getFavorites());
            setCurrentPage(1);
        }

        updateFavorites();
        window.addEventListener("favorites-updated", updateFavorites);
        window.addEventListener("storage", updateFavorites);

        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch(() => {
                setError("Không thể tải danh sách yêu thích.");
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            window.removeEventListener("favorites-updated", updateFavorites);
            window.removeEventListener("storage", updateFavorites);
        };
    }, []);

    const favoriteProducts = useMemo(() => {
        return products.filter((product) => favoriteIds.includes(product.id));
    }, [products, favoriteIds]);

    const filteredProducts = useMemo(() => {
        let res = [...favoriteProducts];

        if (searchTerm.trim()) {
            const keyword = searchTerm.toLowerCase();

            res = res.filter((product) =>
                product.name.toLowerCase().includes(keyword) ||
                product.scientificName.toLowerCase().includes(keyword) ||
                product.origin.toLowerCase().includes(keyword)
            );
        }

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
    }, [favoriteProducts, searchTerm, selectedCategories, priceRange, sortOption]);

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
                return current.filter((item) => item !== category);
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
            <Header/>
            <Navbar/>

            <main className="favorites-page">
                <div className="container">
                    <div className="favorites-heading">
                        <div>
                            <span>Danh sách của bạn</span>
                            <h1>Sản phẩm yêu thích</h1>
                        </div>
                        <strong>{filteredProducts.length} sản phẩm</strong>
                    </div>

                    {loading ? (
                        <div className="favorites-empty">Đang tải sản phẩm...</div>
                    ) : error ? (
                        <div className="favorites-empty">{error}</div>
                    ) : favoriteProducts.length === 0 ? (
                        <div className="favorites-empty">
                            Bạn chưa có sản phẩm yêu thích.
                        </div>
                    ) : (
                        <>
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
                                    {filteredProducts.length === 0 ? (
                                        <div className="favorites-empty">
                                            Không tìm thấy sản phẩm phù hợp.
                                        </div>
                                    ) : (
                                        <>
                                            <ProductGrid products={currentProducts}/>
                                            <Pagination page={currentPage} totalPages={totalPages} onChange={setCurrentPage}/>
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>

            <Footer/>
        </>
    );
}
