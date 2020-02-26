import React from "react";

export default function RecipeTitle(props) {
  if (props.recipe) {
    console.log(props.recipe);
    return <div>{props.recipe.name}</div>;
  } else {
    return <></>;
  }
}
