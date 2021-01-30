import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";



const Team = () => (
  <div>
       
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Entrepreneurs
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give you the superpowers to do things that you always
              dreamed of. Let us delight your customers and empower your needs.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="\images\web-application.jpg"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column floated="left" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="\images\web-application.jpg"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Entrepreneurs
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give you the superpowers to do things that you always
              dreamed of. Let us delight your customers and empower your needs.
            </p>
          </Grid.Column>
          
        </Grid.Row><Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Entrepreneurs
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give you the superpowers to do things that you always
              dreamed of. Let us delight your customers and empower your needs.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="\images\web-application.jpg"
            />
          </Grid.Column>
        </Grid.Row><Grid.Row>
          <Grid.Column floated="left" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="\images\web-application.jpg"
            />
          </Grid.Column> 
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Entrepreneurs
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give you the superpowers to do things that you always
              dreamed of. Let us delight your customers and empower your needs.
            </p>
          </Grid.Column>
         
        </Grid.Row>
       </Grid>
    </Segment>

    
  </div>
);

export default Team;
