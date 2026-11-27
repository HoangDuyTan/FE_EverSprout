import type {Product, ProductVariant} from "./products";

export interface CartItem {
    product: Product;
    quantity: number;
    variantId?: string;
    variantName?: string;
    unitPrice?: number;
}

export function getCart(): CartItem[] {
    const data = localStorage.getItem("eversprout-cart");
    if (data === null) {
        return [];
    }
    try{
        const cart = JSON.parse(data);
        return Array.isArray(cart)? cart : [];
    }catch{
        return [];
    }
}

export function saveCart(cart: CartItem[]) {
    localStorage.setItem("eversprout-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
}

export function getCartItemKey(item: CartItem): string {
    return `${item.product.id}-${item.variantId ?? "standard"}`;
}

export function getCartItemPrice(item: CartItem): number {
    return item.unitPrice ?? item.product.price;
}

export function addProductToCart(
    product: Product,
    quantity: number = 1,
    variant?: ProductVariant
): boolean {
    if (!Number.isInteger(quantity) || quantity < 1) {
        return false;
    }
    const cart = getCart();
    const totalQuantity = cart.filter((item) => item.product.id === product.id)
        .reduce((sum, item) => sum + item.quantity, 0);

    if (totalQuantity + quantity > product.stock) {
        return false;
    }

    const selectedVariant = variant ?? product.variants?.[0];
    const variantId= selectedVariant?.id ?? "standard";
    const existingItem = cart.find((item)=>item.product.id=== product.id
        && (item.variantId ?? "standard")===variantId);

    if (existingItem) {
        existingItem.quantity+= quantity;
        existingItem.product =product;
        existingItem.variantId= variantId;
        existingItem.variantName= selectedVariant ?.name;
        existingItem.unitPrice =selectedVariant?.price ?? product.price;
    } else{
        cart.push({
            product: product,
            quantity: quantity,
            variantId: variantId,
            variantName: selectedVariant?.name,
            unitPrice: selectedVariant?.price ?? product.price
        });
    }
    saveCart(cart);
    return true;
}

export function formatPrice(price: number) {
    return price.toLocaleString("vi-VN") +"đ";
}
