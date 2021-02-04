
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
            </List>
          </Grid.Column>          
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Thank you!
            </Header>
            <p>
              We appreciate you and everything you do for us.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>);
};

export default Footer;
