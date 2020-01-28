import React from "react";
import { connect } from "react-redux";
import SmallBook from "./small-book";
import { getAllBooks } from "../store/book";

export default connect(
  state => ({ user: state.user, book: state.book }),
  dispatch => ({ getAllBooks: () => dispatch(getAllBooks()) })
)(
  class UserBook extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAllBooks();
    }

    render() {
      return (
        <div className="userBook">
          <h3>{this.props.user.email}`s Book</h3>
          <br />
          <div className="smallBookCard">
            {this.props.book.books.map(books => (
              <SmallBook key={books.id} {...books} user={this.props.user} />
            ))}
          </div>
        </div>
      );
    }
  }
);
