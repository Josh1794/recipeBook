import React from "react";
import { List } from "semantic-ui-react";

export default class SmallIngredient extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      // if (this.props.recipeId === this.props.match.params.id) {
      return <List.Item>{this.props.name}</List.Item>;
      // } else return <></>;
    }
  }
}
