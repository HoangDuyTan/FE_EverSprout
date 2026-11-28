import apiClient from "../api/apiClient";
import type {ProductVariant} from "../data/products";

interface ApiProduct {
    id: string;
    name: string;
    data: {
        productId: number;
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
    };
}

export async function getProducts() {
    const res = await apiClient.get<ApiProduct[]>("/collections/products/objects");

    return res.data.map((item) => ({
        id: item.data.productId,
        name: item.name,
        scientificName: item.data.scientificName,
        category: item.data.category,
        origin: item.data.origin,
        price: item.data.price,
        oldPrice: item.data.oldPrice,
        rating: item.data.rating,
        reviews: item.data.reviews,
        stock: item.data.stock,
        tag: item.data.tag,
        sold: item.data.sold,
        propagation: item.data.propagation,
        ecology: item.data.ecology,
        image: item.data.image,
        location: item.data.location,
        variants: item.data.variants
    }));
}

export async function getProductById(productId: number) {
    const products = await getProducts();

    const product = products.find(
        (item) => item.id === productId
    );

    return product || null;
}
