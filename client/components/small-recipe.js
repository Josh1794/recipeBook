import React from "react";
import { Card } from "semantic-ui-react";

export default class SmallRecipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      if (String(this.props.bookId) === this.props.match.params.id) {
        return (
          <Card>
            <a href={`/books/${this.props.match.params.id}/${this.props.id}`}>
              <Card.Header>{this.props.name}</Card.Header>
            </a>
          </Card>
        );
      } else return <></>;
    }
  }
}
