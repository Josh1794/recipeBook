import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import SmallIngredient from "./small-ingredient";
import SmallInstruction from "./small-instruction";

//convert to class component
export const SingleRecipe = props => {
  console.log(props);
  return (
    <div className="singleRecipe">
      <h2>DUMMY RECIPE {props.match.params.id} </h2>
      <br />
      <h3>Ingredients</h3>
      <List>
        <SmallIngredient />
      </List>
      <h3>Instructions</h3>
      <List ordered>
        <SmallInstruction />
      </List>
    </div>
  );
};

const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(SingleRecipe);

/**
 * PROP TYPES
 */
SingleRecipe.propTypes = {
  email: PropTypes.string
};
