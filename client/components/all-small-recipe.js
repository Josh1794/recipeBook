import React from "react";
import { Card } from "semantic-ui-react";

export default function AllSmallRecipe(props) {
  return (
    <div>
      <a href={`/books/${props.bookId}/${props.id}`}>
        <Card>
          <Card.Header className="bookHeader">{props.name}</Card.Header>
        </Card>
      </a>
    </div>
  );
}
