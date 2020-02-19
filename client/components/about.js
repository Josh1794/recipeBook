import React from "react";
import { Header, Icon, Image, Divider, Container } from "semantic-ui-react";

export default function About() {
  return (
    <div className="About">
      <br />
      <Container>
        <Header as="h1" icon textAlign="center">
          <Icon name="food" circular />
          <Header.Content>Welcome to your Digital Recipe Book!</Header.Content>
        </Header>
        <Divider />
        <p>
          Growing up I watched my mother and grandmother cook amazing food using
          recipes they had gathered from, family, friends, newspapers,
          magazines, and the internet. All those wonderful recipes were stored
          in only one place, a soft cover, marble notebook. It always seemed so
          fragile and vulnerable, so I created a place to store those recipes
          safe and secure, and make it easy to use! So anyone from a novice home
          cook, to someone who isnt comfortable with technology can use it.
        </p>
      </Container>
    </div>
  );
}
