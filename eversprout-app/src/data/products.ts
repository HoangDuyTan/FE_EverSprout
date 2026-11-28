export interface ProductVariant {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface Product {
    id: number;
    name: string;
    scientificName: string;
    category: string;
    origin: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    stock: number;
    tag: string;
    sold: number;
    propagation: string;
    ecology: string;
    image: string;
    location: string;
    variants?: ProductVariant[];
}

export const categories = [
    "Cây ăn trái",
    "Cây rau hữu cơ mầm",
    "Cây hoa kiểng & Leo giàn",
    "Cây phong thủy để bàn",
    "Vật tư trồng cây",
];
