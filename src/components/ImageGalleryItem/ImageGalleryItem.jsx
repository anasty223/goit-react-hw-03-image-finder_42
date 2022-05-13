import { Items,Image } from "./ImageGalleryItem.styles";

const ImageGalleryItem = ({ img, tags}) => {
    return <Items className="gallery-item">
  <Image src={img} alt={tags} />
</Items>
}
export default ImageGalleryItem;