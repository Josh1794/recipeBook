import React from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import SmallIngredient from "./small-ingredient";
import SmallInstruction from "./small-instruction";
import { getAllIngredients } from "../store/ingredient";

//convert to class component
export default connect(
  state => ({
    user: state.user,
    book: state.book,
    recipe: state.recipe,
    ingredient: state.ingredient
  }),
  dispatch => ({ getAllIngredients: () => dispatch(getAllIngredients()) })
)(
  class SingleRecipe extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAllIngredients();
    }
    render() {
      return (
        <div className="singleRecipe">
          <h2>DUMMY RECIPE {this.props.match.params.id} </h2>
          <br />
          <h3>Ingredients</h3>
          <List>
            <SmallIngredient props={this.props} />
          </List>
          <h3>Instructions</h3>
          <List ordered>
            <SmallInstruction />
          </List>
        </div>
      );
    }
  }
);
