import { Clock, Package } from "lucide-react";

export type ShippingType = "standard" | "express";

interface ShippingSectionProps {
    selected: ShippingType;
    onSelect: (value: ShippingType) => void;
}

export default function ShippingSection({ selected, onSelect }: ShippingSectionProps) {
    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#197a35] font-bold text-[14px] flex items-center justify-center shrink-0">
                    2
                </span>
                <h3 className="text-[18px] font-bold text-[#1f2937]">Phương thức vận chuyển</h3>
            </div>

            <div className="flex flex-col gap-4">
                <label
                    onClick={() => onSelect("standard")}
                    className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-solid cursor-pointer transition ${
                        selected === "standard"
                            ? "border-[#197a35] bg-[#f2f9f4]"
                            : "border-[#e5e7eb] hover:border-[#cbd5e1] bg-white"
                    }`}
                >
                    <input
                        type="radio"
                        name="shipping"
                        checked={selected === "standard"}
                        onChange={() => onSelect("standard")}
                        className="sr-only"
                    />
                    <span
                        className={`w-5 h-5 mt-0.5 rounded-full border-2 border-solid flex items-center justify-center shrink-0 bg-white ${
                            selected === "standard" ? "border-[#197a35]" : "border-[#cbd5e1]"
                        }`}
                    >
                        {selected === "standard" && <span className="w-2.5 h-2.5 rounded-full bg-[#197a35]" />}
                    </span>
                    <div className="grow min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-[15px] text-[#1f2937]">
                                    Giao tiêu chuẩn bọc cây chuyên dụng
                                </span>
                                <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-[#dcfce7] text-[#15803d] rounded-md">
                                    Ưu đãi
                                </span>
                            </div>
                            <span className="font-bold text-[14px] text-[#197a35]">Miễn phí</span>
                        </div>
                        <p className="text-[13px] text-[#6b7280] mt-1.5 leading-relaxed">
                            Đóng khung giữ ẩm bầu rễ, thời gian giao từ 2-3 ngày làm việc.
                        </p>
                        <div className="flex items-center gap-2.5 mt-3 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 bg-white border border-solid border-[#dce5df] px-2.5 py-1 rounded-lg text-[12px] text-[#374151]">
                                <Package size={13} className="text-[#197a35]" /> Hộp bảo vệ 5 lớp
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-white border border-solid border-[#dce5df] px-2.5 py-1 rounded-lg text-[12px] text-[#374151]">
                                <Clock size={13} className="text-[#197a35]" /> Giữ ẩm rễ 96 giờ
                            </span>
                        </div>
                    </div>
                </label>

                <label
                    onClick={() => onSelect("express")}
                    className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-solid cursor-pointer transition ${
                        selected === "express"
                            ? "border-[#197a35] bg-[#f2f9f4]"
                            : "border-[#e5e7eb] hover:border-[#cbd5e1] bg-white"
                    }`}
                >
                    <input
                        type="radio"
                        name="shipping"
                        checked={selected === "express"}
                        onChange={() => onSelect("express")}
                        className="sr-only"
                    />
                    <span
                        className={`w-5 h-5 mt-0.5 rounded-full border-2 border-solid flex items-center justify-center shrink-0 bg-white ${
                            selected === "express" ? "border-[#197a35]" : "border-[#cbd5e1]"
                        }`}
                    >
                        {selected === "express" && <span className="w-2.5 h-2.5 rounded-full bg-[#197a35]" />}
                    </span>
                    <div className="grow min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-[15px] text-[#1f2937]">
                                    Giao hỏa tốc trong ngày
                                </span>
                                <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-[#fef3c7] text-[#b45309] rounded-md">
                                    Nhanh
                                </span>
                            </div>
                            <span className="font-bold text-[14px] text-[#1f2937]">+35.000đ</span>
                        </div>
                        <p className="text-[13px] text-[#6b7280] mt-1.5 leading-relaxed">
                            Giao trực tiếp từ vườn Củ Chi trong 4-6 tiếng (áp dụng nội thành TP.HCM).
                        </p>
                    </div>
                </label>
            </div>
        </section>
    );
}
