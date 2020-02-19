import React from "react";
import { Card } from "semantic-ui-react";

export default function SmallRecipe(props) {
  {
    if (String(props.bookId) === props.match.params.id) {
      return (
        <a href={`/books/${props.match.params.id}/${props.id}`}>
          <Card className="smallRecipe">
            <Card.Header className="bookHeader">{props.name}</Card.Header>
          </Card>
        </a>
      );
    } else return <></>;
  }
}
