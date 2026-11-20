import { FormEvent, useState } from "react";
import { BadgeCheck, Calendar, CheckCircle2, Lock, Mail, Phone, Save, User } from "lucide-react";

export interface UserProfile {
    memberId: string;
    joinedAt: string;
    fullName: string;
    phone: string;
    email: string;
    birthday: string;
    gender: "male" | "female" | "other";
}

interface ProfileInfoTabProps {
    profile: UserProfile;
    onSave: (updated: UserProfile) => void;
}

export default function ProfileInfoTab({ profile, onSave }: ProfileInfoTabProps) {
    const [form, setForm] = useState<UserProfile>(profile);
    const [savedMsg, setSavedMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const inputClass =
        "w-full h-[46px] bg-[#f5f7fb] border border-solid border-[#e2e8f0] rounded-xl text-[14px] text-[#1f2937] font-[inherit] focus:bg-white focus:border-[#197a35] outline-none transition";
    const readonlyClass =
        "w-full h-[46px] bg-[#eef2f6] border border-solid border-[#e2e8f0] rounded-xl text-[14px] text-[#6b7280] font-[inherit] cursor-not-allowed outline-none";

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSavedMsg("");
        setErrorMsg("");

        if (!form.fullName.trim()) {
            setErrorMsg("Vui lòng nhập họ và tên.");
            return;
        }
        if (!/^[0-9+\s]{9,12}$/.test(form.phone.trim())) {
            setErrorMsg("Số điện thoại không hợp lệ (9-11 chữ số).");
            return;
        }

        onSave({
            ...form,
            memberId: profile.memberId,
            joinedAt: profile.joinedAt,
            email: profile.email
        });
        setSavedMsg("Đã cập nhật thông tin cá nhân.");
    };

    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="pb-5 mb-6 border-b border-solid border-[#f1f5f9]">
                <h2 className="text-[19px] font-bold text-[#1f2937]">Thông tin cá nhân</h2>
                <p className="text-[13px] text-[#6b7280] mt-1">
                    Cập nhật thông tin liên hệ. Email và mã thành viên là thông tin cố định không thể thay đổi.
                </p>
            </div>

            {errorMsg && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-[#fef2f2] border border-solid border-[#fecaca] text-[#b91c1c] text-[13px]">
                    {errorMsg}
                </div>
            )}

            {savedMsg && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#0f5f27] text-[13px] flex items-center gap-2">
                    <CheckCircle2 size={17} className="shrink-0" />
                    <span>{savedMsg}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Mã thành viên <span className="text-[#9ca3af] font-normal">(cố định)</span>
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <BadgeCheck size={17} />
                            </span>
                            <input
                                type="text"
                                value={profile.memberId}
                                disabled
                                readOnly
                                className={`${readonlyClass} pl-10 pr-10 font-mono`}
                            />
                            <span className="absolute right-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <Lock size={15} />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Ngày tham gia <span className="text-[#9ca3af] font-normal">(cố định)</span>
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <Calendar size={17} />
                            </span>
                            <input
                                type="text"
                                value={profile.joinedAt}
                                disabled
                                readOnly
                                className={`${readonlyClass} pl-10 pr-10`}
                            />
                            <span className="absolute right-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <Lock size={15} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Email đăng ký <span className="text-[#9ca3af] font-normal">(cố định, không thể sửa)</span>
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <Mail size={17} />
                        </span>
                        <input
                            type="email"
                            value={profile.email}
                            disabled
                            readOnly
                            className={`${readonlyClass} pl-10 pr-10`}
                        />
                        <span className="absolute right-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <Lock size={15} />
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <User size={17} />
                            </span>
                            <input
                                type="text"
                                value={form.fullName}
                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                placeholder="Nhập họ và tên"
                                className={`${inputClass} pl-10 pr-4`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <Phone size={17} />
                            </span>
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                placeholder="Nhập số điện thoại"
                                className={`${inputClass} pl-10 pr-4`}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">Ngày sinh</label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                                <Calendar size={17} />
                            </span>
                            <input
                                type="date"
                                value={form.birthday}
                                onChange={(e) => setForm({ ...form, birthday: e.target.value })}
                                className={`${inputClass} pl-10 pr-4`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#374151]">Giới tính</label>
                        <div className="h-[46px] flex items-center gap-6">
                            {[
                                { value: "male", label: "Nam" },
                                { value: "female", label: "Nữ" },
                                { value: "other", label: "Khác" }
                            ].map((opt) => (
                                <label key={opt.value} className="inline-flex items-center gap-2 text-[14px] text-[#374151] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender"
                                        checked={form.gender === opt.value}
                                        onChange={() =>
                                            setForm({ ...form, gender: opt.value as UserProfile["gender"] })
                                        }
                                        className="w-4 h-4 accent-[#197a35] cursor-pointer"
                                    />
                                    <span>{opt.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-3 flex justify-end">
                    <button
                        type="submit"
                        className="h-[46px] px-6 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 rounded-xl font-semibold text-[14px] inline-flex items-center gap-2 transition"
                    >
                        <Save size={17} />
                        <span>Lưu thay đổi</span>
                    </button>
                </div>
            </form>
        </section>
    );
}
