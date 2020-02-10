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
          <a href={`/books/${this.props.match.params.id}/${this.props.id}`}>
            <Card className="smallRecipe">
              <Card.Header className="bookHeader">
                {this.props.name}
              </Card.Header>
            </Card>
          </a>
        );
      } else return <></>;
    }
  }
}
