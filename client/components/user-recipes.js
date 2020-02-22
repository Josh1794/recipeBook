import React from "react";
import { connect } from "react-redux";
import { getAllRecipes } from "../store/recipe";
import { Button, Icon } from "semantic-ui-react";
import AllSmallRecipe from "./all-small-recipe";

export default connect(
  state => ({
    user: state.user,
    book: state.book,
    recipe: state.recipe
  }),

  dispatch => ({
    getAllRecipes: () => dispatch(getAllRecipes())
  })
)(
  class UserRecipe extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAllRecipes();
    }

    render() {
      return (
        <div className="singleBook">
          <Button animated="fade" className="singleBookBack">
            <a href="/profile">
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </a>
          </Button>
          <h1> All Your Recipes </h1>
          <br />
          <div className="smallContainer">
            {this.props.recipe.recipes.map(recipes => (
              <AllSmallRecipe key={recipes.id} {...recipes} />
            ))}
          </div>
          <br />
        </div>
      );
    }
  }
);
