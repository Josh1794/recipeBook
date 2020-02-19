import React from "react";
import { connect } from "react-redux";
import { List, Button, Icon } from "semantic-ui-react";
import SmallIngredient from "./small-ingredient";
import SmallInstruction from "./small-step";
import { getAllIngredients } from "../store/ingredient";
import { getAllRecipes } from "../store/recipe";
import { getAllSteps } from "../store/step";

export default connect(
  state => ({
    recipe: state.recipe,
    ingredient: state.ingredient,
    step: state.step
  }),
  dispatch => ({
    getAllRecipes: () => dispatch(getAllRecipes()),
    getAllIngredients: () => dispatch(getAllIngredients()),
    getAllSteps: () => dispatch(getAllSteps())
  })
)(
  class SingleRecipe extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAllRecipes();
      this.props.getAllIngredients();
      this.props.getAllSteps();
    }
    render() {
      return (
        <div className="singleRecipe">
          <Button animated="fade" className="singleRecipeBack">
            <a href={`/books/${this.props.match.params.recipeId}`}>
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </a>
          </Button>

          <h2>DUMMY RECIPE {this.props.match.params.recipeId} </h2>
          <br />
          <h3>Ingredients</h3>
          <List>
            {this.props.ingredient.ingredients.map(ingredients => (
              <SmallIngredient
                key={ingredients.id}
                {...ingredients}
                match={this.props.match}
              />
            ))}
          </List>
          <h3>Instructions</h3>
          <List ordered>
            {this.props.step.steps.map(steps => (
              <SmallInstruction
                key={steps.id}
                {...steps}
                match={this.props.match}
              />
            ))}
          </List>
          <br />
          <Button content="Edit Recipe" labelPosition="left" icon="edit" />
        </div>
      );
    }
  }
);
