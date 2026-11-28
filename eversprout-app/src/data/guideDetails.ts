export interface GuideSection {
    title: string;
    content: string[];
}

export interface GuideDetail {
    id: number;
    intro: string;
    sections: GuideSection[];
    tips: string[];
}

export const guideDetails: GuideDetail[] = [
    {
        id: 1,
        intro: "Xoài cát Hòa Lộc là giống cây ăn trái được trồng phổ biến nhờ chất lượng quả tốt và khả năng thích nghi khá cao. Nếu chăm sóc đúng cách, cây có thể sinh trưởng khỏe ngay cả khi trồng tại nhà.",
        sections: [
            {
                title: "1. Chuẩn bị đất và vị trí trồng",
                content: [
                    "Nên chọn vị trí có nhiều ánh sáng, thoáng và không bị ngập nước.",
                    "Đất trồng cần tơi xốp, thoát nước tốt. Có thể trộn đất với phân hữu cơ và một ít xơ dừa."
                ]
            },
            {
                title: "2. Cách trồng cây",
                content: [
                    "Đào hố lớn hơn bầu cây một chút, đặt cây thẳng đứng và giữ nguyên phần đất quanh rễ.",
                    "Lấp đất vừa ngang mặt bầu, không nén đất quá chặt để tránh làm tổn thương bộ rễ."
                ]
            },
            {
                title: "3. Chăm sóc sau khi trồng",
                content: [
                    "Tưới nước đều trong những ngày đầu nhưng không để đất quá ẩm.",
                    "Sau khi cây ổn định có thể bổ sung phân hữu cơ định kỳ để cây phát triển tốt hơn."
                ]
            }
        ],
        tips: [
            "Không tưới quá nhiều nước vào buổi tối.",
            "Nên cắm cọc cố định cây khi mới trồng.",
            "Kiểm tra lá thường xuyên để phát hiện sâu bệnh sớm."
        ]
    },
    {
        id: 2,
        intro: "Ổi Ruby ruột đỏ là giống cây dễ trồng và phù hợp với nhiều điều kiện khác nhau. Việc cung cấp đủ ánh sáng và dinh dưỡng sẽ giúp cây phát triển nhanh và cho quả tốt.",
        sections: [
            {
                title: "1. Ánh sáng",
                content: [
                    "Đặt cây ở nơi có khoảng 6 đến 8 giờ nắng mỗi ngày.",
                    "Thiếu ánh sáng có thể khiến cây phát triển chậm và khó ra hoa."
                ]
            },
            {
                title: "2. Tưới nước",
                content: [
                    "Giữ đất có độ ẩm vừa phải và hạn chế để nước đọng lâu quanh gốc.",
                    "Có thể giảm lượng nước tưới vào những ngày mưa hoặc thời tiết mát."
                ]
            },
            {
                title: "3. Bón phân",
                content: [
                    "Bổ sung phân hữu cơ định kỳ khoảng 3 đến 4 tuần một lần.",
                    "Khi cây bắt đầu ra hoa có thể tăng thêm lượng kali phù hợp."
                ]
            }
        ],
        tips: [
            "Cắt bỏ cành yếu hoặc mọc quá dày.",
            "Không bón phân quá sát gốc.",
            "Theo dõi sâu bệnh ở các lá non."
        ]
    },
    {
        id: 3,
        intro: "Chanh không hạt có thể trồng tốt trong chậu nếu được cung cấp đủ ánh sáng, nước và dinh dưỡng.",
        sections: [
            {
                title: "1. Chọn chậu",
                content: [
                    "Nên sử dụng chậu có đường kính từ 40 cm trở lên.",
                    "Đáy chậu cần có lỗ thoát nước để hạn chế úng rễ."
                ]
            },
            {
                title: "2. Giá thể",
                content: [
                    "Có thể dùng hỗn hợp đất sạch, phân hữu cơ và xơ dừa.",
                    "Giá thể nên có khả năng giữ ẩm nhưng vẫn thoát nước tốt."
                ]
            },
            {
                title: "3. Chăm sóc",
                content: [
                    "Đặt chậu ở nơi có nhiều ánh sáng.",
                    "Tưới khi bề mặt đất bắt đầu khô và bón phân định kỳ."
                ]
            }
        ],
        tips: [
            "Không để chậu bị ngập sau khi tưới.",
            "Tỉa cành già để tán cây thông thoáng.",
            "Có thể thay lớp đất mặt sau vài tháng."
        ]
    }
];