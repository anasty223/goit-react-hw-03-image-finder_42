import { Component } from "react";
import styled from "styled-components";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImages from "./servises/fetchImages";
import { ToastContainer, toast } from "react-toastify";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    isPending: false,
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
    const { images, isPending } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        {isPending && <Oval color="#00BFFF" height={80} width={80} />}
        <ImageGallery images={images} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
      </>
    );
  }
}

export default App;
