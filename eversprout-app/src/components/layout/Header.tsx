import "../../styles/layout/header.css";
import {Heart, Bell, ShoppingCart} from "lucide-react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart } from "../../data/cart";

export default function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        function updateCartCount() {
            const cart = getCart();
            const total = cart.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0);
            setCartCount(total);
        }
        //reload sluong header
        updateCartCount();
        //Update khi giỏ han thay đổi
        window.addEventListener( "cart-updated", updateCartCount );
        //Update khi thay đổi ở tab khác
        window.addEventListener("storage", updateCartCount);

        return () => {
            window.removeEventListener(  "cart-updated",updateCartCount);
            window.removeEventListener( "storage",  updateCartCount );
        };
    }, []);

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
                    <Link to="/cart" className="icon-btn cart-link" title="Giỏ hàng"  >
                        <ShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="cart-badge"> {cartCount > 99 ? "99+" : cartCount} </span>
                        )}
                    </Link>
                    <button className="account">
                        <Link to="/login">Đăng nhập</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}