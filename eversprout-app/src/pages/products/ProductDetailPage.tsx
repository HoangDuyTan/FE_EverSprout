import {Link,useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { products } from "../../data/products";
import { formatPrice } from "../../data/cart";

export default function ProductDetailPage() {
    const { id } = useParams(); //laays id tu url
    const product = products.find((item) => item.id === Number(id)); //ep kiểu id từ chuỗi thành số đúng trường product.ts

    return (
        <>
            <Header />
            <Navbar />
            <main className="product-detail-page">
                <div className="container">
                    {/*check sp tồn tại*/}
                    {!product ? (
                        <div>
                            <h2>Không tìm thấy sản phẩm</h2>
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
                                <div className="product-detail-gallery">
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <div className="product-detail-info">
                                    <span>{product.category}</span>
                                    <h1>{product.name}</h1>
                                    <p>{product.scientificName}</p>
                                    <p>
                                        Đánh giá: {product.rating}
                                        ({product.reviews} lượt)
                                    </p>
                                    <h2> {formatPrice(product.price)}</h2>
                                    <p> Tình trạng: {product.stock > 0? ` Còn ${product.stock} cây` : " Hết hàng"} </p>
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
