import React from "react";
import { List } from "semantic-ui-react";

export default function SmallIntruction(props) {
  //NEED TO MAKE SURE STEPS ARE SORTED BY STEP NUMBER
  {
    if (props.recipeId === +props.match.params.id) {
      return <List.Item>{props.instruction}</List.Item>;
    } else return <></>;
  }
}
