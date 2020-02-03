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
        <div className="bookSection">
          <div className="userBook">
            <h3>{this.props.user.email}`s Book</h3>
            <br />
            <div className="smallContainer">
              {this.props.book.books.map(books => (
                <SmallBook
                  key={books.id}
                  {...books}
                  user={this.props.user}
                  books={this.props.books}
                />
              ))}
            </div>
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
        </div>
      );
    }
  }
);
