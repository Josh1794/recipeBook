import React from "react";
import { Card } from "semantic-ui-react";

export function SmallBook(props) {
  {
    if (props.userId === props.user.id) {
      return (
        <a href={`/books/${props.id}`}>
          <Card>
            <Card.Header className="bookHeader">{props.name}</Card.Header>
            <Card.Meta># of Recipes (coming soon)</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </Card>
        </a>
      );
    } else return <></>;
  }
}
