import { FormEvent, useState } from "react";
import { MapPin, Plus, Trash2 } from "lucide-react";

export interface SavedAddress {
    id: number;
    receiver: string;
    phone: string;
    city: string;
    district: string;
    ward: string;
    street: string;
    isDefault: boolean;
}

const initialAddresses: SavedAddress[] = [
    {
        id: 1,
        receiver: "Nguyễn Văn An",
        phone: "0912 345 678",
        city: "TP. Hồ Chí Minh",
        district: "Huyện Củ Chi",
        ward: "Xã Tân An Hội",
        street: "Số 45, Đường Tỉnh Lộ 8",
        isDefault: true
    },
    {
        id: 2,
        receiver: "Nguyễn Văn An",
        phone: "0912 345 678",
        city: "TP. Hồ Chí Minh",
        district: "TP. Thủ Đức",
        ward: "Phường Linh Trung",
        street: "Khu phố 6, Đường số 12",
        isDefault: false
    }
];

export default function AddressBookTab() {
    const [addresses, setAddresses] = useState<SavedAddress[]>(initialAddresses);
    const [showForm, setShowForm] = useState(false);
    const [draft, setDraft] = useState({
        receiver: "",
        phone: "",
        city: "TP. Hồ Chí Minh",
        district: "Quận 1",
        ward: "Phường Bến Nghé",
        street: ""
    });

    const inputClass =
        "w-full h-[44px] px-3.5 bg-[#f5f7fb] border border-solid border-[#e2e8f0] rounded-xl text-[13.5px] text-[#1f2937] font-[inherit] focus:bg-white focus:border-[#197a35] outline-none transition";

    const setDefault = (id: number) => {
        setAddresses((prev) => prev.map((item) => ({ ...item, isDefault: item.id === id })));
    };

    const removeAddress = (id: number) => {
        setAddresses((prev) => prev.filter((item) => item.id !== id));
    };

    const handleAdd = (e: FormEvent) => {
        e.preventDefault();
        if (!draft.receiver.trim() || !draft.phone.trim() || !draft.street.trim()) {
            return;
        }
        setAddresses((prev) => [
            ...prev,
            {
                id: Date.now(),
                ...draft,
                isDefault: prev.length === 0
            }
        ]);
        setDraft({
            receiver: "",
            phone: "",
            city: "TP. Hồ Chí Minh",
            district: "Quận 1",
            ward: "Phường Bến Nghé",
            street: ""
        });
        setShowForm(false);
    };

    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-solid border-[#f1f5f9]">
                <div>
                    <h2 className="text-[19px] font-bold text-[#1f2937]">Sổ địa chỉ nhận hàng</h2>
                    <p className="text-[13px] text-[#6b7280] mt-1">
                        Lưu sẵn địa chỉ để đặt mua cây giống nhanh hơn khi thanh toán.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => setShowForm((prev) => !prev)}
                    className="h-[42px] px-4 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 rounded-xl font-semibold text-[13px] inline-flex items-center gap-1.5 shrink-0 self-start sm:self-auto transition"
                >
                    <Plus size={16} />
                    <span>{showForm ? "Đóng biểu mẫu" : "Thêm địa chỉ mới"}</span>
                </button>
            </div>

            {showForm && (
                <form
                    onSubmit={handleAdd}
                    className="mb-6 p-5 bg-[#f8faf9] border border-solid border-[#dce5df] rounded-xl flex flex-col gap-4"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <input
                            type="text"
                            required
                            placeholder="Tên người nhận *"
                            value={draft.receiver}
                            onChange={(e) => setDraft({ ...draft, receiver: e.target.value })}
                            className={inputClass}
                        />
                        <input
                            type="tel"
                            required
                            placeholder="Số điện thoại *"
                            value={draft.phone}
                            onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                            className={inputClass}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <input
                            type="text"
                            placeholder="Tỉnh / Thành phố"
                            value={draft.city}
                            onChange={(e) => setDraft({ ...draft, city: e.target.value })}
                            className={inputClass}
                        />
                        <input
                            type="text"
                            placeholder="Quận / Huyện"
                            value={draft.district}
                            onChange={(e) => setDraft({ ...draft, district: e.target.value })}
                            className={inputClass}
                        />
                        <input
                            type="text"
                            placeholder="Phường / Xã"
                            value={draft.ward}
                            onChange={(e) => setDraft({ ...draft, ward: e.target.value })}
                            className={inputClass}
                        />
                    </div>

                    <input
                        type="text"
                        required
                        placeholder="Số nhà, tên đường, ấp/khu phố *"
                        value={draft.street}
                        onChange={(e) => setDraft({ ...draft, street: e.target.value })}
                        className={inputClass}
                    />

                    <div className="flex justify-end gap-2.5 pt-1">
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="h-[40px] px-4 bg-white border border-solid border-[#d1d5db] text-[#374151] rounded-xl text-[13px] font-semibold"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="h-[40px] px-5 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 rounded-xl text-[13px] font-semibold"
                        >
                            Lưu địa chỉ
                        </button>
                    </div>
                </form>
            )}

            <div className="flex flex-col gap-4">
                {addresses.map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 sm:p-5 rounded-xl border border-solid flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                            item.isDefault
                                ? "border-[#197a35] bg-[#f2f9f4]"
                                : "border-[#e5e7eb] bg-white"
                        }`}
                    >
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-[#197a35] mt-0.5 shrink-0" />
                            <div>
                                <div className="flex items-center gap-2.5 flex-wrap">
                                    <span className="font-bold text-[14.5px] text-[#1f2937]">{item.receiver}</span>
                                    <span className="text-[13px] text-[#6b7280]">{item.phone}</span>
                                    {item.isDefault && (
                                        <span className="px-2.5 py-0.5 bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#197a35] text-[11px] font-semibold rounded-full">
                                            Mặc định
                                        </span>
                                    )}
                                </div>
                                <p className="text-[13.5px] text-[#4b5563] mt-1">
                                    {item.street}, {item.ward}, {item.district}, {item.city}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
                            {!item.isDefault && (
                                <button
                                    type="button"
                                    onClick={() => setDefault(item.id)}
                                    className="h-[36px] px-3 bg-white hover:bg-[#e8f5e9] border border-solid border-[#d1d5db] hover:border-[#197a35] text-[#374151] hover:text-[#197a35] rounded-lg text-[12.5px] font-semibold transition"
                                >
                                    Đặt mặc định
                                </button>
                            )}
                            {addresses.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeAddress(item.id)}
                                    className="w-9 h-9 bg-white hover:bg-[#fef2f2] border border-solid border-[#e5e7eb] hover:border-[#fecaca] text-[#9ca3af] hover:text-[#dc2626] rounded-lg flex items-center justify-center transition"
                                    title="Xóa địa chỉ"
                                >
                                    <Trash2 size={15} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
