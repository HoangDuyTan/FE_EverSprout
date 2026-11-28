import apiClient from "../api/apiClient";
import type {Product} from "../data/products";

export async function getProducts() {
    const res = await apiClient.get<Product[]>("/products");
    return res.data;
}

export async function getProductById(productId: number) {
    const res = await apiClient.get<Product>(`/products/${productId}`);
    return res.data;
}