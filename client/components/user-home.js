import React from "react";
import { connect } from "react-redux";

export default connect(
  state => ({
    user: state.user,
    book: state.book
  }),
  dispatch => ({
    getAllBooks: () => {
      dispatch(getAllBooks());
    }
  })
)(
  class UserHome extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="Profile">
          <h3>Welcome, {this.props.user.email}</h3>
        </div>
      );
    }
  }
);

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     email: state.user.email
//   };
// };

// export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// };
