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
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

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
        <Grid padded centered>
          <Grid.Column>
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Dashboard
                </Header>
              </Grid.Row>
              {/* comment */}
              <Card>
                <Image
                  src="\images\web-application.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>User</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Profile Description.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="mail" />
                    email@email.com
                  </a>
                </Card.Content>
              </Card>
              {/* comment */}
              <Grid textAlign="center" >
              <Grid.Column width={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="\images\web-application.jpg"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="\images\web-application.jpg"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="\images\web-application.jpg"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="\images\web-application.jpg"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
              </Grid>
              
              <Divider section hidden />
              <Grid.Row>
                <Header dividing size="huge" as="h2">
                  Order History
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Table singleLine striped selectable unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Order #</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1.001</Table.Cell>
                      <Table.Cell>Lorem</Table.Cell>
                      <Table.Cell>ipsum</Table.Cell>
                      <Table.Cell>dolor</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1.001</Table.Cell>
                      <Table.Cell>Lorem</Table.Cell>
                      <Table.Cell>ipsum</Table.Cell>
                      <Table.Cell>dolor</Table.Cell>
                    </Table.Row>                      
                  </Table.Body>
                </Table>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Profile;
