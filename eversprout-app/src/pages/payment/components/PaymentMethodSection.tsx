import { useState } from "react";
import { Banknote, Check, Copy, QrCode } from "lucide-react";

export type PaymentType = "cod" | "bank";

interface PaymentMethodSectionProps {
    selected: PaymentType;
    phone: string;
    onSelect: (value: PaymentType) => void;
}

export default function PaymentMethodSection({ selected, phone, onSelect }: PaymentMethodSectionProps) {
    const [copied, setCopied] = useState(false);

    const copyAccountNumber = (account: string) => {
        navigator.clipboard.writeText(account);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const transferNote = phone.trim() ? `ESP ${phone.replace(/\s+/g, "")}` : "ESP + SĐT đặt hàng";

    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#197a35] font-bold text-[14px] flex items-center justify-center shrink-0">
                    3
                </span>
                <h3 className="text-[18px] font-bold text-[#1f2937]">Phương thức thanh toán</h3>
            </div>

            <div className="flex flex-col gap-4">
                <label
                    onClick={() => onSelect("cod")}
                    className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-solid cursor-pointer transition ${
                        selected === "cod"
                            ? "border-[#197a35] bg-[#f2f9f4]"
                            : "border-[#e5e7eb] hover:border-[#cbd5e1] bg-white"
                    }`}
                >
                    <input
                        type="radio"
                        name="payment"
                        checked={selected === "cod"}
                        onChange={() => onSelect("cod")}
                        className="sr-only"
                    />
                    <span
                        className={`w-5 h-5 mt-0.5 rounded-full border-2 border-solid flex items-center justify-center shrink-0 bg-white ${
                            selected === "cod" ? "border-[#197a35]" : "border-[#cbd5e1]"
                        }`}
                    >
                        {selected === "cod" && <span className="w-2.5 h-2.5 rounded-full bg-[#197a35]" />}
                    </span>
                    <div className="grow min-w-0">
                        <div className="flex items-center gap-2">
                            <Banknote size={18} className="text-[#197a35] shrink-0" />
                            <span className="font-bold text-[15px] text-[#1f2937]">
                                Thanh toán khi nhận hàng (COD)
                            </span>
                        </div>
                        <p className="text-[13px] text-[#6b7280] mt-1.5 leading-relaxed">
                            Kiểm tra cây khi nhận hàng rồi mới thanh toán cho shipper.
                        </p>
                    </div>
                </label>

                <label
                    onClick={() => onSelect("bank")}
                    className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-solid cursor-pointer transition ${
                        selected === "bank"
                            ? "border-[#197a35] bg-[#f2f9f4]"
                            : "border-[#e5e7eb] hover:border-[#cbd5e1] bg-white"
                    }`}
                >
                    <input
                        type="radio"
                        name="payment"
                        checked={selected === "bank"}
                        onChange={() => onSelect("bank")}
                        className="sr-only"
                    />
                    <span
                        className={`w-5 h-5 mt-0.5 rounded-full border-2 border-solid flex items-center justify-center shrink-0 bg-white ${
                            selected === "bank" ? "border-[#197a35]" : "border-[#cbd5e1]"
                        }`}
                    >
                        {selected === "bank" && <span className="w-2.5 h-2.5 rounded-full bg-[#197a35]" />}
                    </span>
                    <div className="grow min-w-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2">
                                <QrCode size={18} className="text-[#197a35] shrink-0" />
                                <span className="font-bold text-[15px] text-[#1f2937]">
                                    Chuyển khoản ngân hàng (VietQR)
                                </span>
                            </div>
                            <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-[#e0f2fe] text-[#0369a1] rounded-md">
                                Tự động duyệt
                            </span>
                        </div>
                        <p className="text-[13px] text-[#6b7280] mt-1.5 leading-relaxed">
                            Quét mã VietQR hoặc chuyển khoản theo thông tin bên dưới.
                        </p>

                        {selected === "bank" && (
                            <div className="mt-4 p-4 bg-white border border-solid border-[#c5e5cd] rounded-xl text-[13px] flex flex-col gap-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[#6b7280]">Ngân hàng:</span>
                                    <span className="font-semibold text-[#1f2937]">MB Bank</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[#6b7280]">Số tài khoản:</span>
                                    <div className="flex items-center gap-2 font-mono font-bold text-[#1f2937]">
                                        <span>0912345678</span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                copyAccountNumber("0912345678");
                                            }}
                                            className="text-[#197a35] hover:text-[#0f5f27] bg-transparent border-0 p-1 flex items-center"
                                            title="Sao chép"
                                        >
                                            {copied ? <Check size={14} /> : <Copy size={14} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[#6b7280]">Chủ tài khoản:</span>
                                    <span className="font-semibold text-[#1f2937]">EVERSPROUT</span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[#6b7280]">Nội dung CK:</span>
                                    <span className="font-mono font-bold text-[#197a35]">{transferNote}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </label>
            </div>
        </section>
    );
}
