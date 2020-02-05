import React from "react";
import { connect } from "react-redux";
import { getAllBooks } from "../store/book";

export default connect(
  state => ({ user: state.user, book: state.book }),
  dispatch => ({ getAllBooks: () => dispatch(getAllBooks()) })
)(
  class Profile extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAllBooks();
    }

    render() {
      return (
        <div className="Profile">
          <h1>Welcome back, {this.props.user.email}</h1>
        </div>
      );
    }
  }
);
