import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment inverted color="blue" textAlign="center" vertical>
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              color="teal"
            >
              <Container>
                <Menu.Item as={Link} active to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/services">Services</Menu.Item>
                <Menu.Item as={Link} to="/team">Team</Menu.Item>
                <Menu.Item as="a">Contact Us</Menu.Item>
                <Menu.Item position="right">
                  <Button as={Link} inverted={!fixed} to="/login">
                    Log in
                  </Button>
                  <Button
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    as={Link}
                    to="/signup"
                  >
                    Sign Up
                  </Button>
                  <Button
                    icon
                    labelPosition="left"
                    inverted={!fixed}
                    style={{ marginLeft: "0.5em" }}
                    as={Link}
                    to="/profile"                    
                  >
                    <Icon name="user" />
                    Username
                  </Button>
                  <Button
                    icon                    
                    inverted={!fixed}
                    style={{ marginLeft: "0.5em" }}
                    as={Link}
                    to=""                    
                  >
                    <Icon name="cart" />
                    
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            color="teal"
          >
            <Menu.Item as={Link} active to="/">
              Home
            </Menu.Item>
            <Menu.Item as="a">Services</Menu.Item>
            <Menu.Item as="a">Team</Menu.Item>
            <Menu.Item as="a">Contact Us</Menu.Item>
            <Menu.Item as={Link} to="/login">
              Log in
            </Menu.Item>
            <Menu.Item as={Link} to="/signup">
              Sign Up
            </Menu.Item>
            
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment inverted textAlign="center" vertical color="teal">
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as={Link} to="/login" inverted>
                      Log in
                    </Button>
                    <Button
                      as={Link}
                      to="/signup"
                      inverted
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                    <Button
                    inverted
                    icon
                    labelPosition="left"
                    style={{ marginLeft: "0.5em" }}
                    as={Link}
                    to="/profile"                    
                  >
                    <Icon name="user" />
                    Username
                  </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const Navbar = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
