import "../../styles/layout/navbar.css";

export default function Navbar() {
    return (
        <nav className="site-navbar">
            <div className="container navbar-content">
                <a href="/" className="navbar-link active">Trang chủ</a>
                <a href="/products" className="navbar-link">Sản phẩm</a>
                <a href="/categories" className="navbar-link">Danh mục</a>
                <a href="/about" className="navbar-link">Giới thiệu</a>
                <a href="/guides" className="navbar-link">Cẩm nang trồng trọt</a>
                <a href="/contact" className="navbar-link">Liên hệ</a>
            </div>
        </nav>
    );
}