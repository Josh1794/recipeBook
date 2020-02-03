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
          <Card className="smallRecipe">
            <a href={`/books/${this.props.match.params.id}/${this.props.id}`}>
              <Card.Header className="bookHeader">
                {this.props.name}
              </Card.Header>
            </a>
          </Card>
        );
      } else return <></>;
    }
  }
}
