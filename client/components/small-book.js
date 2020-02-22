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
            <div>
              {props.isEditable ? (
                <>
                  <Button size="mini" circular icon="edit" />
                  <Button
                    color="red"
                    size="mini"
                    circular
                    icon="trash alternate outline"
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </Card>
        </a>
      </div>
    );
  } else return <></>;
}
