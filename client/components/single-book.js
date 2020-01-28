import React from "react";
import { connect } from "react-redux";
import SmallRecipe from "./small-recipe";
import { getAllRecipes } from "../store/recipe";
import { getAllBooks } from "../store/book";

export default connect(
  state => ({ user: state.user, book: state.book, recipe: state.recipe }),

  dispatch => ({ getAllRecipes: () => dispatch(getAllRecipes()) })
)(
  class SingleBook extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // this.props.getAllBooks();
      this.props.getAllRecipes();
    }

    render() {
      console.log(this.props);
      return (
        <div className="singleBook">
          <h3>DUMMY RECIPE BOOK {this.props.match.params.id} </h3>
          <br />
          <div>
            {this.props.book.books.map(books => (
              <SmallRecipe key={books.id} {...books} user={this.props.user} />
            ))}
          </div>
        </div>
      );
    }
  }
);
