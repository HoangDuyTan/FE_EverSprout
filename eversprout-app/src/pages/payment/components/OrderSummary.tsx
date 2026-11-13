import { CircleCheck, Lock, ShieldCheck, Tag } from "lucide-react";
import type { CartItem } from "../../../data/cart";
import { formatPrice } from "../../../data/cart";

interface OrderSummaryProps {
    items: CartItem[];
    subtotal: number;
    discount: number;
    shippingFee: number;
    total: number;
    couponInput: string;
    appliedCoupon: string | null;
    agreed: boolean;
    onCouponInputChange: (value: string) => void;
    onApplyCoupon: () => void;
    onRemoveCoupon: () => void;
    onToggleAgreed: (checked: boolean) => void;
}

export default function OrderSummary({
    items,
    subtotal,
    discount,
    shippingFee,
    total,
    couponInput,
    appliedCoupon,
    agreed,
    onCouponInputChange,
    onApplyCoupon,
    onRemoveCoupon,
    onToggleAgreed
}: OrderSummaryProps) {
    return (
        <aside className="lg:sticky lg:top-6 min-w-0">
            <div className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-[18px] text-[#1f2937]">Tóm tắt đơn hàng</h3>
                    <span className="px-3 py-1 bg-[#f1f5f9] text-[#475569] text-[12px] font-semibold rounded-full">
                        {items.length} mặt hàng
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    {items.map(({ product, quantity }) => (
                        <div key={product.id} className="flex items-center gap-3.5">
                            <div className="relative w-16 h-16 shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-16 h-16 rounded-xl object-cover"
                                />
                                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#197a35] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                    {quantity}
                                </span>
                            </div>

                            <div className="grow min-w-0">
                                <h4 className="text-[14px] font-bold text-[#1f2937] truncate">{product.name}</h4>
                                <p className="text-[12px] text-[#9ca3af] italic truncate mt-0.5">
                                    {product.scientificName}
                                </p>
                                <p className="text-[12px] text-[#4b5563] mt-0.5">{product.propagation}</p>
                            </div>

                            <div className="text-right shrink-0">
                                <span className="block font-bold text-[14px] text-[#1f2937]">
                                    {formatPrice(product.price * quantity)}
                                </span>
                                <span className="block text-[12px] text-[#9ca3af] mt-0.5">
                                    {formatPrice(product.price)}/cây
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-5">
                    {appliedCoupon ? (
                        <div className="flex items-center justify-between gap-2 px-3.5 py-3 bg-[#f1f6fc] rounded-xl text-[13px]">
                            <div className="flex items-center gap-2 min-w-0">
                                <Tag size={15} className="text-[#197a35] shrink-0" />
                                <div className="truncate">
                                    <span className="font-bold text-[#1f2937]">{appliedCoupon}</span>
                                    <span className="text-[#6b7280]"> (-10% đơn hàng)</span>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={onRemoveCoupon}
                                className="text-[12px] font-semibold px-2.5 py-1 bg-white hover:bg-[#e8f5e9] text-[#197a35] border border-solid border-[#c5e5cd] rounded-lg shrink-0 transition"
                            >
                                Đã áp dụng
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá (MAMXANH10)"
                                value={couponInput}
                                onChange={(e) => onCouponInputChange(e.target.value)}
                                className="grow h-[42px] px-3.5 bg-[#f5f7fb] border border-solid border-[#e2e8f0] rounded-xl text-[13px] uppercase focus:bg-white focus:border-[#197a35] outline-none"
                            />
                            <button
                                type="button"
                                onClick={onApplyCoupon}
                                className="h-[42px] px-4 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 text-[13px] font-semibold rounded-xl shrink-0 transition"
                            >
                                Áp dụng
                            </button>
                        </div>
                    )}
                </div>

                <div className="h-px bg-[#edf2f7] mb-4" />

                <div className="flex flex-col gap-3 text-[14px]">
                    <div className="flex justify-between items-center text-[#4b5563]">
                        <span>Tạm tính:</span>
                        <span className="font-semibold text-[#1f2937]">{formatPrice(subtotal)}</span>
                    </div>

                    <div className="flex justify-between items-center text-[#4b5563]">
                        <span>Giảm giá {appliedCoupon ? `(${appliedCoupon})` : ""}:</span>
                        <span className="font-semibold text-[#197a35]">-{formatPrice(discount)}</span>
                    </div>

                    <div className="flex justify-between items-center text-[#4b5563]">
                        <span>Phí vận chuyển:</span>
                        <span className="font-semibold text-[#197a35]">
                            {shippingFee === 0 ? "0đ (Freeship)" : formatPrice(shippingFee)}
                        </span>
                    </div>
                </div>

                <div className="h-px bg-[#edf2f7] my-4" />

                <div className="pb-1 flex justify-between items-start gap-3">
                    <div>
                        <span className="block font-bold text-[16px] text-[#1f2937]">Tổng thanh toán:</span>
                        <span className="block text-[12px] text-[#9ca3af] mt-0.5">(Đã bao gồm VAT)</span>
                    </div>
                    <span className="text-[26px] leading-none font-extrabold text-[#197a35]">
                        {formatPrice(total)}
                    </span>
                </div>

                <label className="flex items-start gap-2.5 mt-4 text-[13px] leading-relaxed text-[#4b5563] cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => onToggleAgreed(e.target.checked)}
                        className="w-4 h-4 mt-0.5 shrink-0 accent-[#197a35] cursor-pointer"
                    />
                    <span>
                        Tôi đồng ý với <strong className="text-[#1f2937]">điều khoản mua hàng</strong> và{" "}
                        <strong className="text-[#1f2937]">chính sách đổi trả</strong> của EverSprout.
                    </span>
                </label>

                <button
                    type="submit"
                    className="w-full h-[50px] mt-5 px-5 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 font-bold text-[15px] rounded-xl flex items-center justify-center gap-2.5 shadow-sm transition"
                >
                    <Lock size={17} />
                    <span>Đặt hàng ngay ({formatPrice(total)})</span>
                </button>

                <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="p-3.5 rounded-xl bg-[#f6f9fc] text-center flex flex-col items-center">
                        <CircleCheck size={18} className="text-[#197a35] mb-1.5" />
                        <h5 className="font-bold text-[12px] text-[#1f2937]">Bảo hành 7 ngày</h5>
                        <p className="text-[11px] text-[#6b7280] mt-0.5">1 đổi 1 nếu cây hư héo</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#f6f9fc] text-center flex flex-col items-center">
                        <ShieldCheck size={18} className="text-[#197a35] mb-1.5" />
                        <h5 className="font-bold text-[12px] text-[#1f2937]">Kỹ thuật viên 1:1</h5>
                        <p className="text-[11px] text-[#6b7280] mt-0.5">Hướng dẫn trồng & chăm sóc</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
