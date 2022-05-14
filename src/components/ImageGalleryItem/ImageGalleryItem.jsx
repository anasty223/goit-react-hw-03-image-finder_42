import { Items,Image } from "./ImageGalleryItem.styles";

const ImageGalleryItem = ({ img,modalImg, tags,handleTogleModal}) => {
    return <Items onClick={({ target: { alt } }) => {
        handleTogleModal(modalImg, alt);
      }}>
      <Image src={img} alt={tags} />
</Items>
}
export default ImageGalleryItem;