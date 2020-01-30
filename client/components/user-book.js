import React from "react";
import { connect } from "react-redux";
import SmallBook from "./small-book";
import { getAllBooks } from "../store/book";
import { Button } from "semantic-ui-react";

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
          {this.props.book.books.map(books => (
            <SmallBook
              key={books.id}
              {...books}
              user={this.props.user}
              books={this.props.books}
            />
          ))}
          <br />
          <Button
            content="New Book"
            icon="plus"
            labelPosition="left"
            color="green"
          />
          <br />
          <Button content="Edit Books" labelPosition="left" icon="edit" />
        </div>
      );
    }
  }
);
