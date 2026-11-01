import ProductCard from "../../../components/common/ProductCard.tsx";
import "../../../styles/pages/home/featured-products-section.css"

const products = [
    {
        image: "",
        name: "Cây giống xoài cát Hòa Lộc",
        scientificName: "Mangifera indica F1",
        price: "65.000đ",
        rating: 5,
        sold: 118,
        tag: "Bán chạy"
    },
    {
        image: "",
        name: "Cây giống ổi Ruby",
        scientificName: "Psidium guajava Ruby",
        price: "45.000đ",
        rating: 4.9,
        sold: 64,
        tag: "Chuẩn F1"
    },
    {
        image: "",
        name: "Cây giống chanh không hạt",
        scientificName: "Citrus latifolia",
        price: "55.000đ",
        rating: 4.8,
        sold: 82,
        tag: "Năng suất cao"
    },
    {
        image: "",
        name: "Cây giống cà chua bi F1",
        scientificName: "Solanum lycopersicum",
        price: "15.000đ",
        rating: 4.9,
        sold: 210,
        tag: "Dễ trồng"
    },
    {
        image: "",
        name: "Cây giống hoa hồng tỉ muội",
        scientificName: "Rosa chinensis minima",
        price: "75.000đ",
        rating: 5,
        sold: 45,
        tag: "Ra hoa quanh năm"
    },
    {
        image: "",
        name: "Cây giống bưởi da xanh",
        scientificName: "Citrus maxima F1",
        price: "80.000đ",
        rating: 4.9,
        sold: 115,
        tag: "Cây ghép khỏe"
    },
    {
        image: "",
        name: "Cây giống mận ruột đỏ",
        scientificName: " ",
        price: "70.000đ",
        rating: 4.8,
        sold: 47,
        tag: "Giống mới"
    },
    {
        image: "",
        name: "Cây giống hương thảo",
        scientificName: "Salvia rosmarinus",
        price: "35.000đ",
        rating: 5,
        sold: 83,
        tag: "Gia vị thảo mộc"
    }
];

export default function FeaturedProductsSection() {
    return (
        <section className="home-products-section">
            <div className="container">
                <div className="home-products-heading">
                    <div>
                        <span>Tuyển chọn chất lượng cao</span>
                        <h2>Cây giống nổi bật</h2>
                        <p>Được kiểm định bầu rễ và tình trạng sâu bệnh trước khi xuất kho.</p>
                    </div>

                    <div className="home-product-tabs">
                        <button className="active">Tất cả</button>
                        <button>Cây ăn trái</button>
                        <button>Rau củ F1</button>
                        <button>Hoa & Thảo mộc</button>
                    </div>
                </div>

                <div className="home-product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.name}{...product}/>
                    ))}
                </div>

                <div className="home-products-more">
                    <a href="/products">Xem tất cả hơn 200+ giống cây →</a>
                </div>
            </div>
        </section>
    );
}