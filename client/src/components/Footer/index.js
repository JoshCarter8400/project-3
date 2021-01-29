
import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const Footer = () => {  
    return (
    <Segment inverted color="blue" vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as={Link} active to="/">Home</List.Item>
              <List.Item as="a">Services</List.Item>
              <List.Item as="a">Team</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Placeholder1</List.Item>
              <List.Item as="a">Placeholder2</List.Item>
              <List.Item as="a">Placeholder3</List.Item>
              <List.Item as="a">Placeholder4</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could
              help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>);
};

export default Footer;
