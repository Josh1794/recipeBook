import React from "react";
import { List, Button } from "semantic-ui-react";

export default function SmallIngredient(props) {
  {
    if (props.recipeId === +props.match.params.id) {
      return (
        <List.Item>
          <div>
            {props.quantity} {props.name}{" "}
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
        </List.Item>
      );
    } else return <></>;
  }
}
