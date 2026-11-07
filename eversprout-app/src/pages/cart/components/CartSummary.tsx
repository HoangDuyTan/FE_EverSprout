
import { ShieldCheck, Truck } from "lucide-react";
import { formatPrice } from "../../../data/cart";

interface Props {
    subtotal: number;
    shipping: number;
    discount: number;
    total: number;
    onCheckout: () => void;
}

function CartSummary({subtotal, shipping,  discount, total, onCheckout,}: Props) {
    return (
        <div className="cart-summary">
            <h2>Tóm tắt đơn hàng</h2>

            <div className="summary-line">
                <span>Tạm tính</span>
                <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div className="summary-line">
                <span>Phí vận chuyển</span>
                <strong>
                    {shipping === 0 ? "Miễn phí"  : formatPrice(shipping)}
                </strong>
            </div>

            <div className="summary-line discount">
                <span>Giảm giá</span>
                <strong> -{formatPrice(discount)} </strong>
            </div>
            <hr />
            <div className="summary-total">
                <span>Tổng thanh toán</span>
                <strong> {formatPrice(total)}</strong>
            </div>

            <p className="summary-note">
                Tổng tiền được tính theo giỏ hàng hiện tại.
            </p>

            <button type="button" className="checkout-btn" disabled={subtotal === 0} onClick={onCheckout}>
                Tiến hành thanh toán
            </button>

            <div className="summary-policy">
                <p>
                    <Truck size={18}/>
                    <span>
                        <b>Đóng thùng chuyên dụng:</b>
                        Đảm bảo cây được bảo vệ trong quá trình vận chuyển.
                    </span>
                </p>

                <p>
                    <ShieldCheck size={18} />
                    <span>
                        <b>Hỗ trợ cây giống:</b>
                        Tư vấn chăm sóc và kỹ thuật trồng cây.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default CartSummary;
