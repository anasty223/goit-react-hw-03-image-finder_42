export const mapper = (images) => {
  return images.map(({ id, webformatURL, tags, largeImageURL }) => ({
    id,
    webformatURL,
    tags,
    largeImageURL,
  }));
};
