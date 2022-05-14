import { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImages from "./servises/fetchImages";
import { Oval } from "react-loader-spinner";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    isPending: false,
    showModal: false,
    modalImg: "",
    modalAlt: "",
  };
  toggleModal = (image, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: image,
      modalAlt: alt,
    }));
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
              alert(`нет картинок с запросом "${searchQuery}"`)
            );
          }
          if (searchQuery.trim() === "") {
            return (
              this.setState({ isPending: false, images: [] }),
              alert(`Enter text`)
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
    const { images, isPending, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        {isPending && <Oval color="#00BFFF" height={80} width={80} />}

        <ImageGallery images={images} handleTogleModal={this.toggleModal} />

        {showModal && (
          <Modal
            modalImg={this.state.modalImg}
            handleTogleModal={this.toggleModal}
            tag={this.state.modalAlt}
          />
        )}
      </>
    );
  }
}

export default App;
