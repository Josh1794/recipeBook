import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

export const SingleRecipe = props => {
  console.log({ props });
  return (
    <div className="singleRecipe">
      <h3>DUMMY RECIPE {props.match.params.id} </h3>
      <br />
      <List ordered>
        <List.Item>Getting Started</List.Item>
        <List.Item>Introduction</List.Item>
        <List.Item>
          Languages
          <List.List>
            <List.Item>HTML</List.Item>
            <List.Item>Javascript</List.Item>
            <List.Item>CSS</List.Item>
          </List.List>
        </List.Item>
        <List.Item>Review</List.Item>
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
