import React from "react";
import { connect } from "react-redux";
import { List, Button, Icon, Modal, Form, Header } from "semantic-ui-react";
import SmallIngredient from "./small-ingredient";
import SmallInstruction from "./small-step";
import { getAllIngredients, postIngredient } from "../store/ingredient";
import { getAllSteps, postSteps } from "../store/step";
import { getAllRecipes } from "../store/recipe";

export default connect(
  state => ({
    recipe: state.recipe,
    ingredient: state.ingredient,
    step: state.step
  }),
  dispatch => ({
    getAllRecipes: () => dispatch(getAllRecipes()),
    getAllIngredients: () => dispatch(getAllIngredients()),
    getAllSteps: () => dispatch(getAllSteps()),
    postIngredient: (quantity, name, recipeId) =>
      dispatch(postIngredient(quantity, name, recipeId)),
    postSteps: (stepNum, instruction, recipeId) =>
      dispatch(postSteps(stepNum, instruction, recipeId))
  })
)(
  class SingleRecipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ingredientName: "",
        ingredientQuantity: "",
        stepNum: "",
        instruction: "",
        isEditable: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitIngredient = this.handleSubmitIngredient.bind(this);
      this.handleSubmitStep = this.handleSubmitStep.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
      this.props.getAllRecipes();
      this.props.getAllIngredients();
      this.props.getAllSteps();
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    async handleSubmitIngredient() {
      const name = this.state.ingredientName;
      const quantity = this.state.ingredientQuantity;
      const recipeId = this.props.match.params.id;

      this.props.postIngredient(quantity, name, recipeId);
    }
    async handleSubmitStep() {
      const stepNum = this.state.stepNum;
      const instruction = this.state.instruction;
      const recipeId = this.props.match.params.id;

      this.props.postSteps(stepNum, instruction, recipeId);
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
        <div className="singleRecipe">
          <Button animated="fade" className="singleRecipeBack">
            <a href={`/books/${this.props.match.params.recipeId}`}>
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </a>
          </Button>
          <h2>DUMMY RECIPE {this.props.match.params.recipeId} </h2>
          <br />
          <h3>
            Ingredients{" "}
            <Modal
              trigger={
                <Button color="green" size="mini" circular icon="plus" />
              }
            >
              <Modal.Content>
                <Modal.Description>
                  <Form className="addForm">
                    <Header>New Ingredient</Header>
                    <Form.Input
                      label="Ingredient Quantity"
                      placeholder="Quantity"
                      name="ingredientQuantity"
                      type="text"
                      value={this.state.ingredientQuantity}
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      label="Ingredient"
                      placeholder="Your new ingredient"
                      name="ingredientName"
                      type="text"
                      value={this.state.ingredientName}
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      color="blue"
                      onClick={this.handleSubmitIngredient}
                      // disabled={
                      //   !this.state.ingredientName || !this.ingredientQuantity
                      // }
                    >
                      Submit
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </h3>
          <List>
            {this.props.ingredient.ingredients.map(ingredients => (
              <SmallIngredient
                key={ingredients.id}
                {...ingredients}
                match={this.props.match}
                isEditable={this.state.isEditable}
              />
            ))}
          </List>
          <h3>
            Instructions{" "}
            <Modal
              trigger={
                <Button color="green" size="mini" circular icon="plus" />
              }
            >
              <Modal.Content>
                <Modal.Description>
                  <Form className="addForm">
                    <Header>New Step</Header>
                    <Form.Input
                      label="Step Number"
                      placeholder="0"
                      name="stepNum"
                      type="number"
                      value={this.state.stepNum}
                      onChange={this.handleChange}
                    />
                    <Form.TextArea
                      label="Instruction"
                      placeholder="Your new instruction"
                      name="instruction"
                      type="text"
                      value={this.state.instruction}
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      color="blue"
                      onClick={this.handleSubmitStep}
                      // disabled={
                      //   !this.state.ingredientName || !this.ingredientQuantity
                      // }
                    >
                      Submit
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </h3>
          <List ordered>
            {this.props.step.steps.map(steps => (
              <SmallInstruction
                key={steps.id}
                {...steps}
                match={this.props.match}
                isEditable={this.state.isEditable}
              />
            ))}
          </List>
          <br />
          <Button
            content="Edit Recipe"
            labelPosition="left"
            icon="edit"
            onClick={this.handleEdit}
          />
        </div>
      );
    }
  }
);
