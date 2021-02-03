import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';



/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Web-Buffet"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Anything that satisfies your digital appetite."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />    
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const Home = () => (
  <div>
        <Segment
      inverted
      color="blue"
      textAlign="center"
      style={{ minHeight: 700, padding: "1em 0em" }}
      vertical
    >
      <HomepageHeading />
    </Segment>
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
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Web Applications Come To Life
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, let's make your dreams become reality.
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
          <Grid.Column textAlign="center">
            <Button as={Link} to="/team" size="huge">Get to Know Our Team</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company!!!"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            <Image size="tiny" avatar src="\images\internet-ceo.jpg" />
              CEO of the Internet
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image size="tiny" avatar src="\images\all-people.jpg" />
              This is what they all say about us!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Personalized Services
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of catering to your exact need.
        </p>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          Other services
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Consultations?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          We also offer consultation services in many forms
        </p>
      </Container>
    </Segment>
  </div>
);

export default Home;
