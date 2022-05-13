import { Header, Button, Input } from "./Searchbar.styles";
import { Component } from "react";

class Searchbar extends Component {
  state = { query: "" };

  handleSetQuery = (e) => {
   const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
}
onSubmitForm=(e)=> {
    e.preventDefault();
console.log('this.state', this.state)
    this.props.onSubmit(this.state);

    this.reset();

  }
   reset = () => {
    this.setState({query: '' });
  };
  render() {

    return (
      <Header>
        <form className="form" onSubmit={this.onSubmitForm}>
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>

          <Input
            value={this.state.query}
            name="query"
            type="text"
            onChange={this.handleSetQuery}
            //     //   autocomplete="off"
            //     //   autofocus
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

export default Searchbar;
