import {useState} from "react";

interface GalleryImage{ //ttin một ảnh
    src:string;
    label:string;
}
interface ProductGalleryProps{
    images: GalleryImage[]; //list ảnh
    productName:string;
    tag:string;
    origin: string;
    propagation:string; //pp nhân giống
    ecology:string; //ddkien sinh thái
}

export default function ProductGallery({
    images,
    productName,
    tag,
    origin,
    propagation,
    ecology
}:ProductGalleryProps){
    const [activeIndex, setActiveIndex] = useState(0);
    const currentImage= images[activeIndex] ?? images[0]; //lấy ảnh đang chọn=> nếu k có ảnh thì lấy ảnh đầu tien
    if(!currentImage){
        return <p>Chưa có hin ảnh sản phẩm.</p>;
    }
    return (
        <div className="product-detail-gallery" >
            <div className="product-gallery-main">
                <img src={currentImage.src} alt={`${currentImage.label}`}/>
                {tag && ( <span className="product-gallery-tag"> {tag} </span> )} //ch hthi khi cos dlieu tag
            </div>

            <div className="product-gallery-thumbnails">
                {images.map((image,index)=> (
                    <button key={index} type="button"
                            className={`product-gallery-thumbnail ${activeIndex===index ? "active":""}`}
                            onClick={() => setActiveIndex(index)} aria-label={`Xem ảnh ${image.label}`}
                            aria-pressed={activeIndex === index}>

                        <img src={image.src} alt="" />
                        <span>{image.label}</span>
                    </button>
                ))}
            </div>

            <div className="product-gallery-features">
                <span>Nguồn gốc: {origin}</span>
                <span>Nhân giống: {propagation}</span>
                <span>Sinh thái: {ecology}</span>
            </div>

        </div>
    );

}