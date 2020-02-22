import React from "react";
import { List, Button } from "semantic-ui-react";

export default function SmallIntruction(props) {
  //NEED TO MAKE SURE STEPS ARE SORTED BY STEP NUMBER
  {
    if (props.recipeId === +props.match.params.id) {
      return (
        <List.Item>
          <div>
            {props.instruction}{" "}
            {props.isEditable ? (
              <Button
                color="red"
                size="mini"
                circular
                icon="trash alternate outline"
              />
            ) : (
              <></>
            )}
          </div>
        </List.Item>
      );
    } else return <></>;
  }
}
