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
            Full Stack Web Developer I am skilled on both the front-end and back-end of development. I have strong problem-solving skills and communicate well within a team as I am open-minded to all ideas and solutions. I’m constantly seeking ways to improve myself whether it is by learning a new tech stack, gaining a deeper understanding of those I am versed in now, and improving on the soft skills needed for effective team and customer service work while thinking of how to be helpful to those around me. You will get a person with an eagerness to learn and willingness to help and I will always give you an honest effort to put forth the best quality product possible.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Card>
              <Image src="/images/josh.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 2020</Card.Header>
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
              <Card.Content extra>
                <a href="mailto:joshcarter8400@gmail.com">
                  <Icon name="mail" />
                  joshcarter8400@gmail.com
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Divider></Divider>
        <Grid.Row>
          <Grid.Column floated="left" width={6}>
            <Card>
              <Image src="/images/chris.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 2014</Card.Header>
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
              <Card.Content extra>
                <a href="mailto:csouthwick@live.com">
                  <Icon name="mail" />
                  csouthwick@live.com
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Chris Southwick
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Web developer with 5+ years of experience and a BS in computer science. Hobbies include video editing with AviSynth scripts and playing with JavaScript/regex
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
            Responsible, passionate, and a strong leader achieving profitable growth efficiently being reliable and professional, with years of experience supporting executives, sales, and managers to improve internal operations. Accomplishing outstanding results with quality services in all participating fields.
            <br/><br/>"Learn something new every day. Practice something new every week. Teach something new every month. Progression never ends!" - Lucas B.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Card>
              <Image src="/images/lucas.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 2020</Card.Header>
                <Card.Meta>
                <a href="https://mighty-peak-14092.herokuapp.com/">                  
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
              <Card.Content extra>
                <a href="mailto:lucasmello.barros@gmail.com">
                  <Icon name="mail" />
                  lucasmello.barros@gmail.com
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
                <Card.Header>Developing since 2020</Card.Header>
                <Card.Meta>
                <a href="https://gilabadio.github.io/Portfolio">                  
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
              <Card.Content extra>
                <a href="mailto:gilabadio@gmail.com">
                  <Icon name="mail" />
                  gilabadio@gmail.com
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
