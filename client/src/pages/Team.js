import React from "react";
import {
  Card,
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
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Divider horizontal>
        <Header as="h1" style={{ fontSize: "4em" }}>
          Our Team
        </Header>
      </Divider>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Josh Carter
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Card>
              <Image src="/images/josh.jfif" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 1931</Card.Header>
                <Card.Meta>
                <a href="https://josh-carter.net/">                  
                  Portfolio
                </a>
                </Card.Meta>
                <Card.Description>
                  javascript <br />
                  Html <br />
                  CSS <br />
                  MERN
                  <br />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/JoshCarter8400">
                  <Icon name="github" />
                  Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Divider></Divider>
        <Grid.Row>
          <Grid.Column floated="left" width={6}>
            <Card>
              <Image src="/images/chris.jfif" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 131</Card.Header>
                <Card.Meta>
                <a href="https://csouthwick.github.io/react-portfolio/">                  
                  Portfolio
                </a>
                </Card.Meta>
                <Card.Description>
                  javascript <br />
                  Html <br />
                  CSS <br />
                  MERN
                  <br />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/csouthwick">
                  <Icon name="github" />
                  Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Chris Southwick
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Divider></Divider>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Lucas Barros
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Card>
              <Image src="/images/lucas.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 2020</Card.Header>
                <Card.Meta>
                <a href="/">                  
                  Portfolio
                </a>
                </Card.Meta>
                <Card.Description>
                  javascript <br />
                  Html <br />
                  CSS <br />
                  MERN
                  <br />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/lucasmbarros">
                  <Icon name="github" />
                  Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Divider></Divider>
        <Grid.Row>
          <Grid.Column floated="left" width={6}>
            <Card>
              <Image src="/images/gil.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 2020.5</Card.Header>
                <Card.Meta>
                <a href="/">                  
                  Portfolio
                </a>
                </Card.Meta>
                <Card.Description>
                  javascript <br />
                  Html <br />
                  CSS <br />
                  MERN
                  <br />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/gilabadio">
                  <Icon name="github" />
                  Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Gil B. Abadio
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default Team;
