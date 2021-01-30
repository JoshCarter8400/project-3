import React from "react";
import {
  Card,
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
import CardExample from "../components/Team";


const Team = () => (
  <div>
       
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Josh Carter
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
          <Card>
    <Image src='/images/web-application.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Josh</Card.Header>
      <Card.Meta>
        <span className='date'>Developing since 2015</span>
      </Card.Meta>
      <Card.Description>
        Javescript <br/>
        Html <br/>
        CSS <br/>
        MERN<br/>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
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
              Chris Southwick
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Grid.Column>
          
        </Grid.Row><Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
                Lucas Barros
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
              Gil B. Abadio
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Grid.Column>
         
        </Grid.Row>
       </Grid>
    </Segment>

    
  </div>
);

export default Team;
