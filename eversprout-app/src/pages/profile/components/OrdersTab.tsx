import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package } from "lucide-react";
import { products } from "../../../data/products";
import { formatPrice } from "../../../data/cart";

type OrderStatus = "all" | "shipping" | "completed" | "cancelled";

interface OrderRecord {
    code: string;
    date: string;
    status: Exclude<OrderStatus, "all">;
    items: {
        name: string;
        image: string;
        quantity: number;
        price: number;
    }[];
    total: number;
}

const sampleOrders: OrderRecord[] = [
    {
        code: "DH2401",
        date: "26/11/2026",
        status: "shipping",
        items: [
            { name: products[0].name, image: products[0].image, quantity: 2, price: products[0].price },
            { name: products[1].name, image: products[1].image, quantity: 1, price: products[1].price }
        ],
        total: products[0].price * 2 + products[1].price
    },
    {
        code: "DH2389",
        date: "19/11/2026",
        status: "completed",
        items: [
            { name: products[2].name, image: products[2].image, quantity: 3, price: products[2].price }
        ],
        total: products[2].price * 3
    },
    {
        code: "DH2350",
        date: "10/11/2026",
        status: "cancelled",
        items: [
            { name: products[3].name, image: products[3].image, quantity: 1, price: products[3].price }
        ],
        total: products[3].price
    }
];

const statusLabel: Record<OrderRecord["status"], { text: string; className: string }> = {
    shipping: { text: "Đang giao", className: "bg-[#e0f2fe] text-[#0369a1]" },
    completed: { text: "Hoàn thành", className: "bg-[#dcfce7] text-[#15803d]" },
    cancelled: { text: "Đã hủy", className: "bg-[#fee2e2] text-[#b91c1c]" }
};

export default function OrdersTab() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState<OrderStatus>("all");

    const filteredOrders =
        filter === "all" ? sampleOrders : sampleOrders.filter((order) => order.status === filter);

    return (
        <section className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="pb-5 mb-5 border-b border-solid border-[#f1f5f9]">
                <h2 className="text-[19px] font-bold text-[#1f2937]">Đơn hàng của tôi</h2>
                <p className="text-[13px] text-[#6b7280] mt-1">
                    Theo dõi trạng thái giao cây giống và lịch sử mua hàng.
                </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap mb-6">
                {[
                    { key: "all", label: "Tất cả" },
                    { key: "shipping", label: "Đang giao" },
                    { key: "completed", label: "Hoàn thành" },
                    { key: "cancelled", label: "Đã hủy" }
                ].map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => setFilter(tab.key as OrderStatus)}
                        className={`h-[36px] px-4 rounded-full border border-solid text-[13px] font-semibold transition ${
                            filter === tab.key
                                ? "bg-[#197a35] border-[#197a35] text-white"
                                : "bg-white border-[#e5e7eb] text-[#4b5563] hover:border-[#197a35] hover:text-[#197a35]"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {filteredOrders.length === 0 ? (
                <div className="py-12 text-center text-[#6b7280]">
                    <Package size={36} className="mx-auto mb-2.5 text-[#9ca3af]" />
                    <p className="text-[14px]">Chưa có đơn hàng nào ở trạng thái này.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {filteredOrders.map((order) => {
                        const badge = statusLabel[order.status];
                        return (
                            <div
                                key={order.code}
                                className="border border-solid border-[#e5e7eb] rounded-xl p-4 sm:p-5 flex flex-col gap-4"
                            >
                                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-solid border-[#f1f5f9]">
                                    <div className="flex items-center gap-3 text-[13px]">
                                        <span className="font-mono font-bold text-[#1f2937]">#{order.code}</span>
                                        <span className="text-[#9ca3af]">{order.date}</span>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-[12px] font-semibold ${badge.className}`}>
                                        {badge.text}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {order.items.map((item) => (
                                        <div key={item.name} className="flex items-center gap-3.5">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-13 h-13 rounded-lg object-cover border border-solid border-[#e5e7eb] shrink-0"
                                            />
                                            <div className="grow min-w-0">
                                                <h4 className="text-[14px] font-semibold text-[#1f2937] truncate">
                                                    {item.name}
                                                </h4>
                                                <span className="text-[12.5px] text-[#6b7280]">
                                                    Số lượng: {item.quantity}
                                                </span>
                                            </div>
                                            <span className="text-[14px] font-semibold text-[#1f2937] shrink-0">
                                                {formatPrice(item.price * item.quantity)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-3 border-t border-solid border-[#f1f5f9] flex items-center justify-between flex-wrap gap-3">
                                    <div className="text-[14px]">
                                        <span className="text-[#6b7280]">Tổng cộng: </span>
                                        <strong className="text-[16px] text-[#197a35]">{formatPrice(order.total)}</strong>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/payment")}
                                        className="h-[38px] px-4 bg-[#e8f5e9] hover:bg-[#197a35] text-[#197a35] hover:text-white border-0 rounded-lg text-[13px] font-semibold transition"
                                    >
                                        Mua lại đơn này
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
