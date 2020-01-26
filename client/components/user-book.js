import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const UserBook = props => {
  const { email } = props;

  return (
    <div className="userBook">
      <h3>{email}`s Book</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(UserBook);

/**
 * PROP TYPES
 */
UserBook.propTypes = {
  email: PropTypes.string
};
