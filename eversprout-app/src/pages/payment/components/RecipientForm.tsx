import { ChevronDown, Mail, MapPin, Phone, User } from "lucide-react";

export interface RecipientInfo {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    district: string;
    ward: string;
    address: string;
    note: string;
}

interface RecipientFormProps {
    data: RecipientInfo;
    onChange: (updated: RecipientInfo) => void;
}

const cities = ["TP. Hồ Chí Minh", "Hà Nội", "Tiền Giang", "Bến Tre", "Đồng Tháp", "Cần Thơ"];
const districts = ["Huyện Củ Chi", "Huyện Hóc Môn", "Quận 1", "Quận 12", "TP. Thủ Đức"];
const wards = ["Xã Tân An Hội", "Xã Phú Hòa Đông", "Thị trấn Củ Chi", "Phường Bến Nghé"];

export default function RecipientForm({ data, onChange }: RecipientFormProps) {
    const inputClass =
        "w-full h-[46px] bg-[#f5f7fb] border border-solid border-[#e2e8f0] rounded-xl text-[14px] text-[#1f2937] font-[inherit] focus:bg-white focus:border-[#197a35] outline-none transition";

    const updateField = (field: keyof RecipientInfo, value: string) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#197a35] font-bold text-[14px] flex items-center justify-center shrink-0">
                    1
                </span>
                <h3 className="text-[18px] font-bold text-[#1f2937]">Thông tin người nhận hàng</h3>
            </div>

            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Họ và tên khách hàng <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <User size={17} />
                            </span>
                            <input
                                type="text"
                                required
                                value={data.fullName}
                                onChange={(e) => updateField("fullName", e.target.value)}
                                placeholder="Nguyễn Văn An"
                                className={`${inputClass} pl-10 pr-4`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Số điện thoại nhận hàng <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <Phone size={17} />
                            </span>
                            <input
                                type="tel"
                                required
                                value={data.phone}
                                onChange={(e) => updateField("phone", e.target.value)}
                                placeholder="0912 345 678"
                                className={`${inputClass} pl-10 pr-4`}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Địa chỉ email <span className="text-[#9ca3af] font-normal">(không bắt buộc)</span>
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <Mail size={17} />
                        </span>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            placeholder="example@gmail.com"
                            className={`${inputClass} pl-10 pr-4`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Tỉnh / Thành phố <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <select
                                value={data.city}
                                onChange={(e) => updateField("city", e.target.value)}
                                className={`${inputClass} pl-3.5 pr-9 appearance-none cursor-pointer`}
                            >
                                {cities.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 text-[#6b7280] pointer-events-none" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Quận / Huyện <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <select
                                value={data.district}
                                onChange={(e) => updateField("district", e.target.value)}
                                className={`${inputClass} pl-3.5 pr-9 appearance-none cursor-pointer`}
                            >
                                {districts.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 text-[#6b7280] pointer-events-none" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Phường / Xã <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <select
                                value={data.ward}
                                onChange={(e) => updateField("ward", e.target.value)}
                                className={`${inputClass} pl-3.5 pr-9 appearance-none cursor-pointer`}
                            >
                                {wards.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 text-[#6b7280] pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Địa chỉ cụ thể <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <MapPin size={17} />
                        </span>
                        <input
                            type="text"
                            required
                            value={data.address}
                            onChange={(e) => updateField("address", e.target.value)}
                            placeholder="Số nhà, tên đường, ấp/khu phố..."
                            className={`${inputClass} pl-10 pr-4`}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Ghi chú giao hàng
                    </label>
                    <textarea
                        rows={3}
                        value={data.note}
                        onChange={(e) => updateField("note", e.target.value)}
                        placeholder="Giao giờ hành chính, gọi trước khi giao..."
                        className="w-full p-3.5 bg-[#f5f7fb] border border-solid border-[#e2e8f0] rounded-xl text-[14px] text-[#1f2937] leading-relaxed font-[inherit] focus:bg-white focus:border-[#197a35] outline-none transition resize-none"
                    />
                </div>
            </div>
        </section>
    );
}
