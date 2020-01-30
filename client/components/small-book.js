import React from "react";
import { Card } from "semantic-ui-react";

export default class SmallBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      if (this.props.userId === this.props.user.id) {
        return (
          <Card>
            <a href={`/books/${this.props.id}`}>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Meta># of Recipes</Card.Meta>
              <Card.Description>{this.props.description}</Card.Description>
            </a>
          </Card>
        );
      } else return <></>;
    }
  }
}
