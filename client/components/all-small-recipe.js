import React from "react";
import { Card } from "semantic-ui-react";

export default function AllSmallRecipe(props) {
  return (
    <div>
      <Card>
        <Card.Header className="bookHeader">{props.name}</Card.Header>
      </Card>
    </div>
  );
}
