import type { Product } from "../../../data/products";
import { formatPrice } from "../../../data/cart";
import type { CartItem } from "../../../data/cart";

interface Props {
    cart: CartItem[];
    products: Product[];
    onAdd: (product: Product) => void;
}

function CartRecommendations({ cart, products,onAdd }: Props) {
    //lấy 3 sp để gợi ý
    const recommendedProducts = products.filter(
        (product)=> product.category==="Vật tư trồng cây"
    ).slice(0, 3);

    // Ktra vật tư đạt giới hạn ch
    function isUnavailable(product: Product) {
        const itemInCart = cart.find((item) => item.product.id === product.id);
        const quantity = itemInCart ? itemInCart.quantity : 0;
        return product.stock <= 0 || quantity >= product.stock;
    }


    return (
        <section className="cart-recommendations">
            <p className="recommendations-label">
                CHĂM SÓC TRỌN GÓI
            </p>
            <h2>Vật tư gieo trồng gợi ý đi kèm</h2>
            <div className="recommendations-list">
                {recommendedProducts.map((product) => (
                    <div className="recommendation-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <strong>{formatPrice(product.price)}</strong>
                        <button type="button" disabled={isUnavailable(product)} onClick={() => onAdd(product)}>
                            {isUnavailable(product) ?"Đã hết số lượng": "Thêm vào đơn"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CartRecommendations;
