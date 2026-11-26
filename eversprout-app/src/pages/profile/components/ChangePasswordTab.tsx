import { FormEvent, useState } from "react";
import { CheckCircle2, Eye, EyeOff, Lock } from "lucide-react";

export default function ChangePasswordTab() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const inputClass =
        "w-full h-[46px] pl-10 pr-11 bg-[#f5f7fb] border border-solid border-[#e2e8f0] rounded-xl text-[14px] text-[#1f2937] font-[inherit] focus:bg-white focus:border-[#197a35] outline-none transition";

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!currentPassword) {
            setError("Vui lòng nhập mật khẩu hiện tại.");
            return;
        }
        if (newPassword.length < 6) {
            setError("Mật khẩu mới phải có từ 6 ký tự trở lên.");
            return;
        }
        if (newPassword === currentPassword) {
            setError("Mật khẩu mới phải khác mật khẩu hiện tại.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Mật khẩu xác nhận không trùng khớp.");
            return;
        }

        setSuccess("Đổi mật khẩu thành công.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="pb-5 mb-6 border-b border-solid border-[#f1f5f9]">
                <h2 className="text-[19px] font-bold text-[#1f2937]">Đổi mật khẩu</h2>
                <p className="text-[13px] text-[#6b7280] mt-1">
                    Cập nhật mật khẩu định kỳ để bảo vệ tài khoản của bạn.
                </p>
            </div>

            {error && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-[#fef2f2] border border-solid border-[#fecaca] text-[#b91c1c] text-[13px]">
                    {error}
                </div>
            )}

            {success && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#0f5f27] text-[13px] flex items-center gap-2">
                    <CheckCircle2 size={17} className="shrink-0" />
                    <span>{success}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[480px]">
                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Mật khẩu hiện tại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <Lock size={17} />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Nhập mật khẩu hiện tại"
                            className={inputClass}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 bg-transparent border-0 text-[#6b7280] hover:text-[#197a35] flex items-center p-1"
                        >
                            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Mật khẩu mới <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <Lock size={17} />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Tối thiểu 6 ký tự"
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                        Xác nhận mật khẩu mới <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[#9ca3af] pointer-events-none flex items-center">
                            <Lock size={17} />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Nhập lại mật khẩu mới"
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="h-[46px] px-6 bg-[#197a35] hover:bg-[#0f5f27] text-white border-0 rounded-xl font-semibold text-[14px] transition"
                    >
                        Cập nhật mật khẩu
                    </button>
                </div>
            </form>
        </section>
    );
}
