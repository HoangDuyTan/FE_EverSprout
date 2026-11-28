import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import type {Product} from "../../data/products";
import {getProductById} from "../../service/productService";
import ProductGallery from "./components/ProductGallery";
import "../../styles/pages/products/product-detail-page.css";
import ProductPurchase from "./components/ProductPurchase";

export default function ProductDetailPage() {
    const {id} = useParams(); //laays id tu url
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const productId = Number(id);

        if (!productId || productId <= 0) {
            setError("Không tìm thấy sản phẩm.");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        getProductById(productId)
            .then((data) => {
                if (data) {
                    setProduct(data);
                } else {
                    setError("Không tìm thấy sản phẩm.");
                }
            })
            .catch(() => {
                setError("Không thể tải thông tin sản phẩm.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <Header/>
            <Navbar/>
            <main className="product-detail-page">
                <div className="container">
                    {loading ? (
                        <div>
                            <h2>Đang tải sản phẩm...</h2>
                        </div>
                    ) : error || !product ? (
                        <div>
                            <h2>{error || "Không tìm thấy sản phẩm"}</h2>
                            <Link to="/products"> Quay lại danh sách sản phẩm </Link>
                        </div>
                    ) : (
                        <>
                            <div className="product-detail-breadcrumb">
                                <Link to="/">Trang chủ</Link>
                                <span> / </span>
                                <Link to="/products">Sản phẩm</Link>
                                <span> / {product.name}</span>
                            </div>
                            <section className="product-detail-main">
                                <ProductGallery images={[{src: product.image, label: "Tổng thể"}]}
                                                productName={product.name}
                                                tag={product.tag}
                                                origin={product.origin}
                                                propagation={product.propagation}
                                                ecology={product.ecology}
                                />

                                <ProductPurchase
                                    key={product.id}
                                    product={product}/>

                            </section>
                        </>
                    )}
                </div>
            </main>
            <Footer/>
        </>
    );
}
