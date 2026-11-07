import "../../styles/layout/header.css";
import {Heart, Bell, ShoppingCart} from "lucide-react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header-main container">
                <Link to="/" className="logo">
                    <strong>EverSprout</strong>
                    <span>Cội nguồn cây giống</span>
                </Link>

                <form className="search-box">
                    <input type="text" placeholder="Tìm kiếm cây giống bưởi, ổi, bầu, rau sạch..." />
                    <button type="submit">Tìm</button>
                </form>

                <div className="header-actions">
                    <div className="hotline">
                        <span>Hotline tư vấn</span>
                        <strong>1900 6868</strong>
                    </div>

                    <button type="button" className="icon-btn" title="Danh sách yêu thích"><Heart size={20} /></button>
                    <button type="button" className="icon-btn" title="Thông báo"><Bell size={20}/></button>
                    <button type="button" className="icon-btn" title="Giỏ hàng"><ShoppingCart size={20}/></button>

                    <button className="account">
                        <Link to="/login">Đăng nhập</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}