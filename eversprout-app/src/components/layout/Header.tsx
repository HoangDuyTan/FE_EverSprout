import "../../styles/layout/header.css";
import {Heart, Bell, ShoppingCart} from "lucide-react";

export default function Header() {
    return (
        <header className="header">
            <div className="header-main container">
                <a href="/" className="logo">
                    <strong>EverSprout</strong>
                    <span>Cội nguồn cây giống</span>
                </a>

                <form className="search-box">
                    <input type="text" placeholder="Tìm kiếm cây giống bưởi, ổi, bầu, rau sạch..." />
                    <button type="submit">Tìm</button>
                </form>

                <div className="header-actions">
                    <div className="hotline">
                        <span>Hotline tư vấn</span>
                        <strong>1900 6868</strong>
                    </div>

                    <button type="button" className="icon-btn"><Heart size={20} /></button>
                    <button type="button" className="icon-btn"><Bell size={20}/></button>
                    <button type="button" className="icon-btn"><ShoppingCart size={20}/></button>

                    <button className="account">
                        <a href="/login">Đăng nhập</a>
                    </button>
                </div>
            </div>
        </header>
    );
}