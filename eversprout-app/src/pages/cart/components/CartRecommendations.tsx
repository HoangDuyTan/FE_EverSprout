import type { Product } from "../../../data/products";
import { products } from "../../../data/products";
import { formatPrice } from "../../../data/cart";

interface Props {
    onAdd: (product: Product) => void;
}

function CartRecommendations({ onAdd }: Props) {
    //lấy 3 sp để gợi ý
    const recommendedProducts = products.filter(
        (product)=> product.category==="Vật tư trồng cây"
    );

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

                        <button type="button" onClick={() => onAdd(product)}>
                            Thêm vào đơn
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CartRecommendations;
