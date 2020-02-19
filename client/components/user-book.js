import React from "react";
import { connect } from "react-redux";
import { SmallBook } from "./small-book";
import { getAllBooks, postBook } from "../store/book";
import { Button, Modal, Header, Form } from "semantic-ui-react";

export default connect(
  state => ({
    user: state.user,
    book: state.book
  }),

  dispatch => ({
    getAllBooks: () => dispatch(getAllBooks()),
    postBook: (name, description, userId) =>
      dispatch(postBook(name, description, userId))
  })
)(
  class UserBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bookName: "",
        description: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.props.getAllBooks();
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    async handleSubmit() {
      const name = this.state.bookName;
      const description = this.state.description;
      const userId = this.props.user.id;

      this.props.postBook(name, description, userId);
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
            <Modal
              trigger={
                <Button
                  content="New Book"
                  icon="plus"
                  labelPosition="left"
                  color="green"
                />
              }
            >
              <Modal.Content>
                <Modal.Description>
                  <Form className="addForm">
                    <Header>Your New Book</Header>
                    <Form.Input
                      label="Book Name"
                      placeholder="Your new book name"
                      name="bookName"
                      type="text"
                      value={this.state.bookName}
                      onChange={this.handleChange}
                    />

                    <Form.TextArea
                      label="Description"
                      placeholder="Book description"
                      name="description"
                      type="text"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      color="blue"
                      onClick={this.handleSubmit}
                      disabled={!this.state.bookName || !this.state.description}
                    >
                      Submit
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <br />
            <Button content="Edit Books" labelPosition="left" icon="edit" />
          </div>
        </div>
      );
    }
  }
);
