import React from "react";
import { connect } from "react-redux";
import SmallBook from "./small-book";
import { getAllBooks, addedBook } from "../store/book";
import { Button, Modal, TextArea, Header, Form } from "semantic-ui-react";

export default connect(
  state => ({
    user: state.user,
    book: state.book,
    name: "",
    description: ""
  }),
  dispatch => ({
    getAllBooks: () => dispatch(getAllBooks()),
    addedBook: () => dispatch(addedBook())
  })
)(
  class UserBook extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getAllBooks();
      this.props.addedBook();
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleSubmit = () => {
      this.props.addedBook({
        name: this.props.name,
        description: this.props.description,
        userId: this.props.user.id
      });
    };

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
                  <Header>Your New Book</Header>
                  <Form>
                    <Form.Input
                      placeholder="Name"
                      label="Book Name"
                      name="name"
                      value={this.props.name}
                      onChange={this.handleChange}
                    />

                    <Form.Field
                      id="form-textarea-control-description"
                      control={TextArea}
                      label="Description"
                      placeholder="Description"
                      name="description"
                      value={this.props.description}
                      onChange={this.handleChange}
                    />
                    <Button type="submit" onClick={() => this.handleSubmit()}>
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
