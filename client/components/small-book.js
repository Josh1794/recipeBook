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
          <a href={`/books/${this.props.id}`}>
            <Card>
              <Card.Header className="bookHeader">
                {this.props.name}
              </Card.Header>
              <Card.Meta># of Recipes (coming soon)</Card.Meta>
              <Card.Description>{this.props.description}</Card.Description>
            </Card>
          </a>
        );
      } else return <></>;
    }
  }
}
