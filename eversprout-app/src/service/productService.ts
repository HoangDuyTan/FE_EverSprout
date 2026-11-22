import apiClient from "../api/apiClient";
import {products} from "../data/products";
import type {Product} from "../data/products";

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
    };
}

let productsPromise: Promise<Product[]> | null = null;

function mapProduct(item: ApiProduct): Product {
    return {
        id: item.data.productId,
        name: item.name,
        ...item.data
    };
}

function getApiData(product: Product) {
    const {id, name, ...data} = product;

    return {
        name: name,
        data: {
            productId: id,
            ...data
        }
    };
}

async function getApiProducts() {
    const res = await apiClient.get<ApiProduct[]>("/collections/products/objects");
    return res.data;
}

async function syncProducts(apiProducts: ApiProduct[]) {
    for (const product of products) {
        const current = apiProducts.find((item) => item.data.productId === product.id);

        if (!current) {
            await apiClient.post("/collections/products/objects", getApiData(product));
            continue;
        }

        if (!current.data.image || current.data.image.includes("URL_CLOUDINARY")) {
            await apiClient.patch(`/collections/products/objects/${current.id}`, getApiData(product));
        }
    }
}

async function loadProducts(): Promise<Product[]> {
    let apiProducts = await getApiProducts();

    const needSync = products.some((product) => {
        const current = apiProducts.find((item) => item.data.productId === product.id);
        return !current || !current.data.image || current.data.image.includes("URL_CLOUDINARY");
    });

    if (needSync) {
        await syncProducts(apiProducts);
        apiProducts = await getApiProducts();
    }

    return apiProducts.map(mapProduct);
}

export function getProducts(): Promise<Product[]> {
    if (!productsPromise) {
        productsPromise = loadProducts().finally(() => {
            productsPromise = null;
        });
    }

    return productsPromise;
}

export async function getProductById(productId: number): Promise<Product | null> {
    const products = await getProducts();
    return products.find((item) => item.id === productId) || null;
}
