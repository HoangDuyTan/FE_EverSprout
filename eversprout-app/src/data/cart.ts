import type { Product } from "./products";

//1 sp nằm trong cart
export interface CartItem {
    product: Product;
    quantity: number;
}

// Lấy dliệu cart từ localStorage
export function getCart(): CartItem[] {
    const data = localStorage.getItem("eversprout-cart");
    if (data === null) {
        return [];
    }

    try {
        const cart = JSON.parse(data);
        return Array.isArray(cart) ? cart : [];
    } catch {
        return [];
    }
}

//Lưu cart vào localStorage
export function saveCart(cart: CartItem[]) {
    localStorage.setItem("eversprout-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
}

// add 1sp to cart
export function addProductToCart(product: Product) {
    const cart = getCart();

    const existingItem = cart.find(
        (item) => item.product.id === product.id
    );

    if (existingItem) {
        existingItem.quantity += 1; //tồn tại
    } else {
        cart.push({ product: product, quantity: 1, });
    }
    saveCart(cart);
}

//Hthị giá (VNĐ)
export function formatPrice(price: number) {
    return price.toLocaleString("vi-VN") + "đ";
}
