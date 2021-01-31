import React, { Component } from "react";
import {
  Divider,
  Grid,
  Header,
  Image,
  Input,
  Modal,
  Card,
  Icon,
  Button,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

function modalReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const Profile = () => {
  const [state, dispatch] = React.useReducer(modalReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <div className="App">
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Username
                </Header>
              </Grid.Row>
              <Card fluid>
                <Image src="\images\web-application.jpg" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>John Doe</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Profile Description.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="mail" />
                    email@email.com
                  </a>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Header dividing size="huge" as="h1">
                Dashboard
              </Header>
              <Segment color="blue" inverted>
                <Button
                  icon
                  as={Link}
                  color="teal"
                  to=""
                  labelPosition="left"
                  fluid
                >
                  <Icon name="history" />
                  Order History
                </Button>
              </Segment>
              <Segment color="blue" inverted>
                <Button
                  icon
                  color="teal"
                  labelPosition="left"
                  fluid
                  onClick={() => dispatch({ type: "open", size: "mini" })}
                >
                  <Icon name="mail" />
                  Change Email
                </Button>
                <Modal
                  size={size}
                  open={open}
                  onClose={() => dispatch({ type: "close" })}
                >
                  <Modal.Header>Change your email</Modal.Header>
                  <Modal.Content>
                    <Input
                      iconPosition="left"
                      placeholder="Enter new email"
                      fluid
                    >
                      <Icon name="at" />
                      <input />
                    </Input>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      negative
                      onClick={() => dispatch({ type: "close" })}
                    >
                      Cancel
                    </Button>
                    <Button
                      positive
                      onClick={() => dispatch({ type: "close" })}
                    >
                      Confirm
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Segment>
              <Segment color="blue" inverted>
                <Button
                  icon
                  as={Link}
                  color="teal"
                  to=""
                  labelPosition="left"
                  fluid
                >
                  <Icon name="user" />
                  Change Username
                </Button>
              </Segment>
              <Segment color="blue" inverted>
                <Button
                  icon
                  as={Link}
                  color="teal"
                  to=""
                  labelPosition="left"
                  fluid
                >
                  <Icon name="lock" />
                  Change Password
                </Button>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Profile;
