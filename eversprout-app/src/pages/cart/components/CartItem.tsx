import { Trash2 } from "lucide-react";

import type { CartItem as CartItemType } from "../../../data/cart";
import {formatPrice,getCartItemKey,getCartItemPrice} from "../../../data/cart";

interface Props {
    item: CartItemType;
    onIncrease:(key: string) => void;
    onDecrease:(key:string)=> void;
    onRemove:(key: string) => void;
    canIncrease: boolean;
}

function CartItem({ item,onIncrease,onDecrease, onRemove, canIncrease }: Props) {
    const product = item.product;
    const itemKey = getCartItemKey(item);
    const unitPrice = getCartItemPrice(item);
    const total = unitPrice * item.quantity;

    return (
        <div className="cart-item">
            <div className="cart-item-product">
                <img src={product.image} alt={product.name}/>
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    {item.variantName && ( <p>Kích thước: {item.variantName}</p>)}
                    <span>{product.location}</span>
                </div>
            </div>

            <div className="cart-item-price">
                {formatPrice(unitPrice)}
            </div>

            <div className="cart-quantity">
                <button type="button" disabled={item.quantity <= 1} onClick={() => onDecrease(itemKey)}> - </button>
                <span>{item.quantity}</span>
                <button type="button" disabled={!canIncrease} onClick={() => onIncrease(itemKey)}>+ </button>
            </div>

            <div className="cart-item-total">
                {formatPrice(total)}
            </div>

            <button type="button" className="cart-remove" onClick={() => onRemove(itemKey)} aria-label={`Xóa ${product.name}`} >
                <Trash2 size={17} />
            </button>
        </div>
    );
}

export default CartItem;
