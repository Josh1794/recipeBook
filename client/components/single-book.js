import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

export const SingleBook = props => {
  console.log(props);
  return (
    <div className="singleBook">
      <h3>DUMMY RECIPE BOOK {props.match.params.id} </h3>
      <br />
      <Card.Group>
        <Card fluid color="blue" header="DUMMY RECIPE 1" />
        <Card fluid color="orange" header="DUMMY RECIPE 2" />
        <Card fluid color="black" header="DUMMY RECIPE 3" />
      </Card.Group>
    </div>
  );
};

const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(SingleBook);

/**
 * PROP TYPES
 */
SingleBook.propTypes = {
  email: PropTypes.string
};
