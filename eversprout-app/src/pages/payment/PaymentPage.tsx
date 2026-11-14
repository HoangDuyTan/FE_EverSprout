import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, CircleCheck, CreditCard, ShieldCheck, ShoppingCart, Sparkles } from "lucide-react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { CartItem, formatPrice, getCart } from "../../data/cart";
import { products } from "../../data/products";
import RecipientForm, { RecipientInfo } from "./components/RecipientForm";
import ShippingSection, { ShippingType } from "./components/ShippingSection";
import PaymentMethodSection, { PaymentType } from "./components/PaymentMethodSection";
import OrderSummary from "./components/OrderSummary";
import "./tailwind.css";

const fallbackItems: CartItem[] = [
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 3 },
    { product: products[2], quantity: 1 }
];

export default function PaymentPage() {
    const navigate = useNavigate();

    const [items] = useState<CartItem[]>(() => {
        const saved = getCart();
        return saved.length > 0 ? saved : fallbackItems;
    });

    const [recipient, setRecipient] = useState<RecipientInfo>({
        fullName: "",
        phone: "",
        email: "",
        city: "TP. Hồ Chí Minh",
        district: "Huyện Củ Chi",
        ward: "Xã Tân An Hội",
        address: "",
        note: ""
    });

    const [shipping, setShipping] = useState<ShippingType>("standard");
    const [payment, setPayment] = useState<PaymentType>("cod");
    const [couponInput, setCouponInput] = useState("MAMXANH10");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>("MAMXANH10");
    const [agreed, setAgreed] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [orderCode] = useState(() => "DH" + Math.floor(1000 + Math.random() * 9000));

    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
    const shippingFee = shipping === "express" ? 35000 : 0;
    const total = subtotal - discount + shippingFee;

    const handleApplyCoupon = () => {
        const code = couponInput.trim().toUpperCase();
        if (code === "MAMXANH10" || code === "EVERSPROUT") {
            setAppliedCoupon(code);
        } else if (code) {
            alert("Mã giảm giá không hợp lệ!");
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!agreed) {
            alert("Vui lòng đồng ý điều khoản mua hàng trước khi đặt đơn!");
            return;
        }
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Header />
            <Navbar />

            <div className="w-full bg-[#f8faf9] border-0 border-b border-solid border-[#e5e7eb]">
                <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 py-3.5 flex items-center gap-2.5 text-[13px] text-[#6b7280]">
                    <span className="inline-flex items-center gap-1.5 text-[#6b7280]">
                        <ShoppingCart size={15} />
                        <span>Giỏ hàng ({items.length})</span>
                    </span>
                    <ChevronRight size={14} className="text-[#9ca3af]" />
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#197a35]">
                        <CreditCard size={15} />
                        <span>Thanh toán đơn hàng</span>
                    </span>
                    <ChevronRight size={14} className="text-[#9ca3af]" />
                    <span className={submitted ? "font-semibold text-[#197a35]" : "text-[#9ca3af]"}>
                        Hoàn tất
                    </span>
                </div>
            </div>

            <main className="w-full bg-[#f5f8f6] pt-8 pb-20 -mb-[60px]">
                <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8">
                    <div className="bg-[#e6f4ea] border border-solid border-[#c5e5cd] rounded-2xl px-5 sm:px-7 py-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-full bg-[#197a35] text-white flex items-center justify-center shrink-0">
                                <ShieldCheck size={22} />
                            </div>
                            <div>
                                <h2 className="text-[15px] sm:text-[16px] font-bold text-[#0f5f27] leading-snug">
                                    Giao cây đảm bảo 100% tươi khỏe
                                </h2>
                                <p className="text-[13px] text-[#3d5a45] mt-0.5 leading-relaxed">
                                    Cây giống được đóng khung bảo vệ bầu rễ, hỗ trợ đổi mới trong 7 ngày đầu nếu hư hại.
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#197a35] border border-solid border-[#c5e5cd] rounded-full text-[12px] font-semibold shrink-0 self-start sm:self-auto">
                            <Sparkles size={14} />
                            <span>Chuẩn vườn ươm</span>
                        </div>
                    </div>

                    {submitted ? (
                        <div className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-8 sm:p-10 max-w-[640px] mx-auto text-center shadow-sm">
                            <div className="w-16 h-16 bg-[#e8f5e9] text-[#197a35] rounded-full flex items-center justify-center mx-auto mb-5">
                                <CircleCheck size={38} />
                            </div>
                            <h1 className="text-[24px] font-bold text-[#1f2937] mb-2">Đặt hàng thành công!</h1>
                            <p className="text-[#6b7280] text-[14px] leading-relaxed mb-7">
                                Cảm ơn <strong>{recipient.fullName}</strong> đã đặt hàng tại EverSprout. Mã đơn hàng của bạn là{" "}
                                <span className="font-mono font-bold text-[#197a35]">#{orderCode}</span>.
                            </p>

                            <div className="bg-[#f8faf9] border border-solid border-[#e5e7eb] rounded-xl p-5 text-left text-[14px] mb-7 flex flex-col gap-3">
                                <div className="flex justify-between gap-4">
                                    <span className="text-[#6b7280] shrink-0">Người nhận:</span>
                                    <span className="font-semibold text-[#1f2937] text-right">
                                        {recipient.fullName} ({recipient.phone})
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-[#6b7280] shrink-0">Địa chỉ giao:</span>
                                    <span className="font-medium text-[#1f2937] text-right">
                                        {recipient.address}, {recipient.ward}, {recipient.district}, {recipient.city}
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-[#6b7280] shrink-0">Thanh toán:</span>
                                    <span className="font-medium text-[#1f2937] text-right">
                                        {payment === "cod" ? "Thanh toán khi nhận hàng (COD)" : "Chuyển khoản VietQR"}
                                    </span>
                                </div>
                                <div className="h-px bg-[#e5e7eb] my-0.5" />
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-[#1f2937]">Tổng thanh toán:</span>
                                    <span className="font-extrabold text-[#197a35] text-[18px]">{formatPrice(total)}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    type="button"
                                    onClick={() => navigate("/products")}
                                    className="h-[44px] px-6 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 rounded-xl font-semibold text-[14px] transition"
                                >
                                    Tiếp tục mua hàng
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate("/")}
                                    className="h-[44px] px-6 bg-white hover:bg-[#f3f4f6] text-[#374151] border border-solid border-[#d1d5db] rounded-xl font-semibold text-[14px] transition"
                                >
                                    Về trang chủ
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_440px] xl:grid-cols-[minmax(0,1fr)_480px] gap-7 xl:gap-8 items-start"
                        >
                            <div className="flex flex-col gap-6 min-w-0">
                                <RecipientForm data={recipient} onChange={setRecipient} />
                                <ShippingSection selected={shipping} onSelect={setShipping} />
                                <PaymentMethodSection
                                    selected={payment}
                                    phone={recipient.phone}
                                    onSelect={setPayment}
                                />
                            </div>

                            <OrderSummary
                                items={items}
                                subtotal={subtotal}
                                discount={discount}
                                shippingFee={shippingFee}
                                total={total}
                                couponInput={couponInput}
                                appliedCoupon={appliedCoupon}
                                agreed={agreed}
                                onCouponInputChange={setCouponInput}
                                onApplyCoupon={handleApplyCoupon}
                                onRemoveCoupon={() => setAppliedCoupon(null)}
                                onToggleAgreed={setAgreed}
                            />
                        </form>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
