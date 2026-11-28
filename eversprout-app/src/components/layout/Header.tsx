import "../../styles/layout/header.css";
import {Heart, Bell, ShoppingCart} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import {getCart} from "../../data/cart";
import {getFavorites} from "../../data/favorites";

export default function Header() {
    const [cartCount, setCartCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        function updateHeaderCount() {
            const cart = getCart();
            const total = cart.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0);

            setCartCount(total);
            setFavoriteCount(getFavorites().length);
        }

        //reload sluong header
        updateHeaderCount();
        //Update khi giỏ hang hoặc yêu thích thay đổi
        window.addEventListener("cart-updated", updateHeaderCount);
        window.addEventListener("favorites-updated", updateHeaderCount);
        //Update khi thay đổi ở tab khác
        window.addEventListener("storage", updateHeaderCount);

        return () => {
            window.removeEventListener("cart-updated", updateHeaderCount);
            window.removeEventListener("favorites-updated", updateHeaderCount);
            window.removeEventListener("storage", updateHeaderCount);
        };
    }, []);

    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const keyword = search.trim();
        if (!keyword) {
            navigate(`/products`);
            return;
        }

        navigate(`/products?search=${encodeURIComponent(keyword)}`)
    }

    return (
        <header className="header">
            <div className="header-main container">
                <Link to="/" className="logo">
                    <strong>EverSprout</strong>
                    <span>Cội nguồn cây giống</span>
                </Link>

                <form className="search-box" onSubmit={handleSearch}>
                    <input type="text" value={search} placeholder="Tìm kiếm cây giống bưởi, ổi, bầu, rau sạch..."
                           onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit">Tìm</button>
                </form>

                <div className="header-actions">
                    <div className="hotline">
                        <span>Hotline tư vấn</span>
                        <strong>1900 6868</strong>
                    </div>

                    <Link to="/favorites" className="icon-btn favorite-link" title="Danh sách yêu thích"><Heart size={20}/></Link>
                    <button type="button" className="icon-btn" title="Thông báo"><Bell size={20}/></button>
                    <Link to="/cart" className="icon-btn cart-link" title="Giỏ hàng">
                        <ShoppingCart size={20}/>
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