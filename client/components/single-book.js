import React from "react";
import { connect } from "react-redux";
import SmallRecipe from "./small-recipe";
import { Button, Icon, Modal, Form, Header } from "semantic-ui-react";
import { getAllRecipes, postRecipe } from "../store/recipe";
import { getSingleBook } from "../store/book";

export default connect(
  state => ({ user: state.user, book: state.book, recipe: state.recipe }),

  dispatch => ({
    getAllRecipes: () => dispatch(getAllRecipes()),
    getSingleBook: id => dispatch(getSingleBook(id)),
    postRecipe: (name, bookId) => dispatch(postRecipe(name, bookId))
  })
)(
  class SingleBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipeName: "",
        isEditable: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
      this.props.getSingleBook(this.props.match.params.id);
      this.props.getAllRecipes();
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
      const name = this.state.recipeName;
      const bookId = this.props.match.params.id;

      this.props.postRecipe(name, bookId);
    }

    handleEdit() {
      if (this.state.isEditable === false) {
        this.setState({
          isEditable: true
        });
      } else {
        this.setState({
          isEditable: false
        });
      }
    }

    render() {
      return (
        <div className="singleBook">
          <Button animated="fade" className="singleBookBack">
            <a href="/books">
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </a>
          </Button>
          <h1> {this.props.book.singleBook.name} </h1>
          <br />
          <div className="smallContainer">
            {this.props.recipe.recipes.map(recipes => (
              <SmallRecipe
                key={recipes.id}
                {...recipes}
                match={this.props.match}
                isEditable={this.state.isEditable}
              />
            ))}
          </div>
          <br />
          <Modal
            trigger={
              <Button
                content="New Recipe"
                icon="plus"
                labelPosition="left"
                color="green"
              />
            }
          >
            <Modal.Content>
              <Modal.Description>
                <Form className="addForm">
                  <Header>Your New Recipe</Header>
                  <Form.Input
                    label="Recipe Name"
                    placeholder="Your new recipe name"
                    name="recipeName"
                    type="text"
                    value={this.state.bookName}
                    onChange={this.handleChange}
                  />
                  <Button
                    type="submit"
                    color="blue"
                    onClick={this.handleSubmit}
                    disabled={!this.state.recipeName}
                  >
                    Submit
                  </Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <br />
          <Button
            content="Edit Recipes"
            labelPosition="left"
            icon="edit"
            onClick={this.handleEdit}
          />
        </div>
      );
    }
  }
);
