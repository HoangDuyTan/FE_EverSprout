import {imageUrls} from "./imageUrls";

export interface Guide {
    id: number;
    title: string;
    desc: string;
    category: string;
    image: string;
    readTime: number;
    views: number;
    date: string;
}

export const guideCategories = [
    "Cây ăn trái",
    "Rau & thảo mộc",
    "Hoa kiểng",
    "Chăm sóc cơ bản"
];

export const guides: Guide[] = [
    {
        id: 1,
        title: "Cách trồng xoài cát Hòa Lộc tại nhà",
        desc: "Hướng dẫn chọn đất, vị trí trồng và cách chăm sóc cây xoài trong giai đoạn đầu.",
        category: "Cây ăn trái",
        image: imageUrls.product1,
        readTime: 6,
        views: 320,
        date: "2026-11-10"
    },
    {
        id: 2,
        title: "Cách chăm sóc ổi Ruby cho cây nhanh ra trái",
        desc: "Một số lưu ý về tưới nước, ánh sáng và dinh dưỡng giúp cây ổi phát triển ổn định.",
        category: "Cây ăn trái",
        image: imageUrls.guava,
        readTime: 5,
        views: 285,
        date: "2026-11-08"
    },
    {
        id: 3,
        title: "Kỹ thuật trồng chanh không hạt trong chậu",
        desc: "Các bước chuẩn bị chậu, giá thể và chăm sóc chanh phù hợp với sân thượng.",
        category: "Cây ăn trái",
        image: imageUrls.product2,
        readTime: 7,
        views: 210,
        date: "2026-11-05"
    },
    {
        id: 4,
        title: "5 bước chăm sóc cây mới mua về",
        desc: "Những việc nên làm ngay sau khi nhận cây để hạn chế sốc nhiệt và héo lá.",
        category: "Chăm sóc cơ bản",
        image: imageUrls.seedlings,
        readTime: 4,
        views: 450,
        date: "2026-11-12"
    },
    {
        id: 5,
        title: "Cách trộn đất trồng rau tại nhà đơn giản",
        desc: "Công thức giá thể dễ làm cho rau gia vị và các loại rau trồng trong chậu.",
        category: "Rau & thảo mộc",
        image: imageUrls.seedlings,
        readTime: 5,
        views: 195,
        date: "2026-10-29"
    },
    {
        id: 6,
        title: "Trồng húng quế sao cho cây nhiều lá",
        desc: "Cách tưới, bấm ngọn và đặt cây đúng vị trí để húng quế phát triển tốt.",
        category: "Rau & thảo mộc",
        image: imageUrls.basil,
        readTime: 4,
        views: 175,
        date: "2026-10-25"
    },
    {
        id: 7,
        title: "Cách chăm hoa hồng leo cho người mới",
        desc: "Hướng dẫn cơ bản về ánh sáng, tưới nước và cắt tỉa hoa hồng leo.",
        category: "Hoa kiểng",
        image: imageUrls.rose,
        readTime: 6,
        views: 260,
        date: "2026-10-20"
    },
    {
        id: 8,
        title: "Khi nào nên thay chậu cho cây?",
        desc: "Nhận biết các dấu hiệu cây cần thay chậu và cách chuyển cây an toàn.",
        category: "Chăm sóc cơ bản",
        image: imageUrls.rosemary,
        readTime: 3,
        views: 180,
        date: "2026-10-15"
    },
    {
        id: 9,
        title: "Cách tưới nước đúng cho cây trồng chậu",
        desc: "Không phải cây nào cũng cần tưới mỗi ngày. Đây là cách kiểm tra độ ẩm đất đơn giản.",
        category: "Chăm sóc cơ bản",
        image: imageUrls.rosemary,
        readTime: 4,
        views: 390,
        date: "2026-10-12"
    },
    {
        id: 10,
        title: "Bưởi da xanh cần bao nhiêu ánh sáng?",
        desc: "Điều kiện ánh sáng phù hợp giúp bưởi phát triển khỏe và hạn chế sâu bệnh.",
        category: "Cây ăn trái",
        image: imageUrls.pomelo,
        readTime: 5,
        views: 165,
        date: "2026-10-08"
    },
    {
        id: 11,
        title: "Trồng cà chua bi trên ban công",
        desc: "Cách chọn chậu, làm giàn và chăm sóc cà chua bi trong không gian nhỏ.",
        category: "Rau & thảo mộc",
        image: imageUrls.tomato,
        readTime: 7,
        views: 350,
        date: "2026-10-03"
    },
    {
        id: 12,
        title: "Cách nhận biết cây đang thiếu dinh dưỡng",
        desc: "Quan sát màu lá và tốc độ sinh trưởng để phát hiện sớm tình trạng thiếu chất.",
        category: "Chăm sóc cơ bản",
        image: imageUrls.seedlings,
        readTime: 6,
        views: 240,
        date: "2026-09-28"
    }
];
