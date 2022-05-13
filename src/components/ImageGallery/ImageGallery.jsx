import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <ul >
      {images.map(({ id, webformatURL,tags }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
