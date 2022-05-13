import { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImages from "./servises/fetchImages";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    isPending: true,
  };
  formSubmitHandler = (searchQuery) => {
    console.log("searchQuery", searchQuery);
    this.setState({ searchQuery, isPending: true });
  };
  componentDidUpdate() {
    const { searchQuery, page, isPending } = this.state;
    if (isPending) {
      fetchImages(searchQuery, page)
        .then((img) => {
          console.log("img", img);
          if (img.length === 0) {
            return (
              this.setState({ isPending: false }),
              alert(`нет картинок с запросом "${searchQuery}`)
            );
          }
          this.setState((prev) => ({
            images: page > 1 ? [...prev.images, ...img] : img,
            isPending: false,
          }));
        })
        .catch((error) => {
          console.log(error.massage);
        });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {this.state.loading && <div>...loading</div>}
        <ImageGallery images={images} />
      </>
    );
  }
}

export default App;
