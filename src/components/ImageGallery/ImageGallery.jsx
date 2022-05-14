import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import {List} from './ImageGallery.styles'
const ImageGallery = ({ images,handleTogleModal }) => {
  return (
    <List >
      {images.map(({ id, webformatURL,tags,largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          tags={tags} 
          handleTogleModal={handleTogleModal}
          modalImg={largeImageURL}
        />
      ))}
    </List>
  );
};
export default ImageGallery;
