import { NavLink } from "react-router-dom";
import "../../styles/layout/navbar.css";

export default function Navbar() {
    const getNavClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "navbar-link active" : "navbar-link";

    return (
        <nav className="site-navbar">
            <div className="container navbar-content">
                <NavLink to="/" end className={getNavClass}>Trang chủ</NavLink>
                <NavLink to="/products" className={getNavClass}>Sản phẩm</NavLink>
                <NavLink to="/categories" className={getNavClass}>Danh mục</NavLink>
                <NavLink to="/about" className={getNavClass}>Giới thiệu</NavLink>
                <NavLink to="/guides" className={getNavClass}>Cẩm nang trồng trọt</NavLink>
                <NavLink to="/contact" className={getNavClass}>Liên hệ</NavLink>
            </div>
        </nav>
    );
}