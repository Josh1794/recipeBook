import React from "react";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "DUMMY BOOK 1",
    description: "Optional Recipe book description here",
    //Number of recipes is equal to number of recipes that have this books id
    meta: "# Recipes"
  },
  {
    header: "DUMMY BOOK 2",
    description: "Optional Recipe book description here",
    meta: "# Recipes"
  },
  {
    header: "DUMMY BOOK 3",
    description: "Optional Recipe book description here",
    meta: "# Recipes"
  }
];

export default class SmallBook extends React.Component {
  render() {
    return (
      <>
        <Card.Group items={items} />
      </>
    );
  }
}
