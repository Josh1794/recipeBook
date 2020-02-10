import React from "react";
import { List } from "semantic-ui-react";

export default class SmallIntruction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, this.props.recipeId, this.props.match.params.id);
    {
      if (this.props.recipeId === +this.props.match.params.id) {
        return <List.Item>{this.props.instruction}</List.Item>;
      } else return <></>;
    }
  }
}
