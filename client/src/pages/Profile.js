import React, { Component } from "react";
import {
  Divider,
  Grid,
  Header,
  Image,
  Table,
  Label,
  Card,
  Icon,
  Button,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none",
    },
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
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
                    as={Link}
                    color="teal"
                    to=""
                    labelPosition="left"
                    fluid
                  >
                    <Icon name="mail" />
                    Change Email
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
  }
}

export default Profile;
