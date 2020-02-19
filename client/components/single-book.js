import React from "react";
import { connect } from "react-redux";
import SmallRecipe from "./small-recipe";
import { Button, Icon } from "semantic-ui-react";
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
      console.log(this.props);
      return (
        <div className="singleBook">
          <Button animated="fade" className="singleBookBack">
            <a href="/books">
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </a>
          </Button>
          <h1> {this.props.book.singleBook.name} </h1>
          <br />
          <div className="smallContainer">
            {this.props.recipe.recipes.map(recipes => (
              <SmallRecipe
                key={recipes.id}
                {...recipes}
                match={this.props.match}
              />
            ))}
          </div>
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
