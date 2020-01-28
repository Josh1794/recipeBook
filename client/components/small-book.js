import React from "react";
import { Card, Link } from "semantic-ui-react";
import { connect } from "react-redux";

export default class SmallBook extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <a href={`/books/${this.props.id}`}>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta># of Recipes</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </a>
      </Card>
    );
  }
}
