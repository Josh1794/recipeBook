import React from "react";
import { List } from "semantic-ui-react";

export default function SmallIngredient(props) {
  {
    if (props.recipeId === +props.match.params.id) {
      return (
        <List.Item>
          {props.quantity} {props.name}
        </List.Item>
      );
    } else return <></>;
  }
}
