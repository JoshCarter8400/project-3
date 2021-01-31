import React, { Component } from "react";
import {
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

const Profile = () => {
  // individual modal var
  const [changeEmailOpen, setChangeEmailOpen] = React.useState(false);
  const [changeUsername, setUsernameOpen] = React.useState(false);
  const [changePassword, setPasswordOpen] = React.useState(false);

  return (
    <div>
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
                <Button animated="fade" floated="right" >
                      <Button.Content visible>
                        <Icon name="pencil" />
                      </Button.Content>
                      <Button.Content hidden >Edit Description</Button.Content>
                    </Button>
                <Card.Content>
                  
                  <Card.Header>
                    John Doe
                    
                  </Card.Header>

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
                  onClick={() => setChangeEmailOpen(true)}
                >
                  <Icon name="mail" />
                  Change Email
                </Button>
              </Segment>
              <Segment color="blue" inverted>
                <Button
                  icon
                  color="teal"
                  labelPosition="left"
                  fluid
                  onClick={() => setUsernameOpen(true)}
                >
                  <Icon name="user" />
                  Change Username
                </Button>
              </Segment>
              <Segment color="blue" inverted>
                <Button
                  icon
                  color="teal"
                  labelPosition="left"
                  fluid
                  onClick={() => setPasswordOpen(true)}
                >
                  <Icon name="lock" />
                  Change Password
                </Button>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* email modal */}
      <Modal
        onClose={() => setChangeEmailOpen(false)}
        onOpen={() => setChangeEmailOpen(true)}
        open={changeEmailOpen}
        size="tiny"
      >
        <Modal.Header>Change your email</Modal.Header>
        <Modal.Content>
          <Input iconPosition="left" placeholder="Enter new email" fluid>
            <Icon name="at" />
            <input />
          </Input>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setChangeEmailOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setChangeEmailOpen(false)}>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
      {/* username modal */}
      <Modal
        onClose={() => setUsernameOpen(false)}
        onOpen={() => setUsernameOpen(true)}
        open={changeUsername}
        size="tiny"
      >
        <Modal.Header>Change your Username</Modal.Header>
        <Modal.Content>
          <Input iconPosition="left" placeholder="Enter new username" fluid>
            <Icon name="user" />
            <input />
          </Input>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setUsernameOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setUsernameOpen(false)}>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
      {/* Password modal */}
      <Modal
        onClose={() => setPasswordOpen(false)}
        onOpen={() => setPasswordOpen(true)}
        open={changePassword}
        size="tiny"
      >
        <Modal.Header>Change your Password</Modal.Header>
        <Modal.Content>
          <Input iconPosition="left" placeholder="Enter new password" fluid>
            <Icon name="lock" />
            <input />
          </Input>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setPasswordOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setPasswordOpen(false)}>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Profile;
