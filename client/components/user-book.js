import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SmallBook from "./small-book";

/**
 * COMPONENT
 */
export const UserBook = props => {
  const { email } = props;
  console.log(props);
  return (
    <div className="userBook">
      <h3>{email}`s Book</h3>
      <br />
      <SmallBook />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id
  };
};

export default connect(mapState)(UserBook);

/**
 * PROP TYPES
 */
UserBook.propTypes = {
  email: PropTypes.string
};

//CLASS COMPONENT
// export default connect(state => ({ books: state.books, user: state.user }))(
//   class UserBook extends React.Component {
//     componentDidMount() {}
//     render() {
//       return (
//         <div className="userBook">
//           <h3>{this.props.user.email}`s Book</h3>
//           <br />
//           <Card.Group />
//         </div>
//       );
//     }
//   }
// );
