import React from "react";
import { connect } from "react-redux";
import SmallRecipe from "./small-recipe";
import { Button } from "semantic-ui-react";
import { getAllRecipes } from "../store/recipe";
import { getSingleBook } from "../store/book";

export default connect(
  state => ({ user: state.user, book: state.book, recipe: state.recipe }),

  dispatch => ({
    getAllRecipes: () => dispatch(getAllRecipes()),
    getSingleBook: id => dispatch(getSingleBook(id))
  })
)(
  class SingleBook extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getSingleBook(this.props.match.params.id);
      this.props.getAllRecipes();
    }

    render() {
      return (
        <div className="singleBook">
          <h1> {this.props.book.singleBook.name} </h1>
          <br />
          {this.props.recipe.recipes.map(recipes => (
            <SmallRecipe
              key={recipes.id}
              {...recipes}
              match={this.props.match}
            />
          ))}
          <Button
            content="New Recipe"
            icon="plus"
            labelPosition="left"
            color="green"
          />
          <br />
          <Button content="Edit Recipes" labelPosition="left" icon="edit" />
        </div>
      );
    }
  }
);
