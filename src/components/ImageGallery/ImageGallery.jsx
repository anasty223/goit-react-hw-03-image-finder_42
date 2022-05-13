import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import {List} from './ImageGallery.styles'
const ImageGallery = ({ images }) => {
  return (
    <List >
      {images.map(({ id, webformatURL,tags }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          tags={tags}
        />
      ))}
    </List>
  );
};
export default ImageGallery;
