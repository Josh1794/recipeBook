import React from "react";
import { Card, Button } from "semantic-ui-react";

export function SmallBook(props) {
  if (props.userId === props.user.id) {
    return (
      <div>
        <a href={`/books/${props.id}`}>
          <Card>
            <Card.Header className="bookHeader">{props.name}</Card.Header>
            <Card.Meta># of Recipes (coming soon)</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </Card>
        </a>
        <div>
          {props.isEditable ? (
            <Button color="red" circular icon="trash alternate outline" />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else return <></>;
}
