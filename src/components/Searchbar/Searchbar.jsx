import { Header, Button, Input } from "./Searchbar.styles";
import { Component } from "react";

class Searchbar extends Component {
  state = { query: "" };

  handleSetQuery = (e) => {
   const { name, value } = e.currentTarget;

    this.setState({ [name]: value.toLowerCase() });
}
onSubmitForm=(e)=> {
    e.preventDefault();
console.log('this.state in form', this.state)
    this.props.onSubmit(this.state.query);

    this.reset();

  }
   reset = () => {
    this.setState({query: '' });
  };
  render() {

    return (
      <Header>
        <form className="form" onSubmit={this.onSubmitForm}>
         

          <Input
            value={this.state.query}
            name="query"
            type="text"
            onChange={this.handleSetQuery}
                  autoComplete="off"
                  autoFocus
            placeholder="Search images and photos"
          />
           <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>
        </form>
      </Header>
    );
  }
}

export default Searchbar;
