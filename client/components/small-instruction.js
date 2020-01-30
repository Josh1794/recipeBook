import React from "react";
import { List } from "semantic-ui-react";

export default class SmallIntruction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    {
      // if (this.props.recipeId === this.props.match.params.id) {
      return (
        <List.Item>
          {this.props.stepNum}
          {this.props.instruction}
        </List.Item>
      );
      // } else return <></>;
    }
  }
}
