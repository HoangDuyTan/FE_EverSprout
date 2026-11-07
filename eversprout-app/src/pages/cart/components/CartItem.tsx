import { Trash2 } from "lucide-react";

import type { CartItem as CartItemType } from "../../../data/cart";
import { formatPrice } from "../../../data/cart";

interface Props {
    item: CartItemType;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}

function CartItem({item, onIncrease, onDecrease, onRemove, }: Props) {
    const product = item.product;

    // total = đơn giá x slượng
    const total = product.price * item.quantity;

    return (
        <div className="cart-item">

            {/*info sản phẩm */}
            <div className="cart-item-product">
                <img src={product.image} alt={product.name} />

                <div>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <span>{product.location}</span>
                </div>
            </div>

            {/* Đơn giá */}
            <div className="cart-item-price">
                {formatPrice(product.price)}
            </div>

            {/* Số lượng */}
            <div className="cart-quantity">
                <button
                    type="button"
                    disabled={item.quantity === 1}
                    onClick={() => onDecrease(product.id)}
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    type="button"
                    onClick={() => onIncrease(product.id)}
                >
                    +
                </button>
            </div>

            {/* Thành tiền */}
            <div className="cart-item-total">
                {formatPrice(total)}
            </div>

            {/* Xóa sản phẩm */}
            <button
                type="button"
                className="cart-remove"
                onClick={() => onRemove(product.id)}
                aria-label={`Xóa ${product.name}`}
            >
                <Trash2 size={17} />
            </button>
        </div>
    );
}

export default CartItem;
