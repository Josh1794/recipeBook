import React from "react";
import { Card, Button } from "semantic-ui-react";

export function SmallBook(props) {
  if (props.userId === props.user.id) {
    return (
      <div>
        <Card>
          <a href={`/books/${props.id}`}>
            <Card.Header className="bookHeader">{props.name}</Card.Header>
            <Card.Meta># of Recipes (coming soon)</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </a>
          <div>
            {props.isEditable ? (
              <>
                <Button size="mini" circular icon="edit" />
                <Button
                  color="red"
                  size="mini"
                  circular
                  icon="trash alternate outline"
                  onClick={() => console.log(props.id)}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </Card>
      </div>
    );
  } else return <></>;
}
