import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../utils/queries';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
}

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });
}

const OrderHistory = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
  const ResponsiveContainer = ({ children }) => (
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  );

  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  };

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  return (
    <>
      <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                {user ? (
                  <>
                    <h5 style={{ fontSize: '1.33em' }}>
                      Order History for {user.username}
                    </h5>
                    {user.orders.map((order) => (
                      <div key={order._id} className="my-2">
                        <h3 style={{ fontSize: '2em' }}>
                          {new Date(
                            parseInt(order.purchaseDate)
                          ).toLocaleDateString()}
                        </h3>
                        <div style={{ fontSize: '1.33em' }}>
                          {order.services.map(
                            ({ _id, image, name, price }, index) => (
                              <div key={index} className="card px-1 py-1">
                                <Link to={`/services/${_id}`}>
                                  <img alt={name} src={`/images/${image}`} />
                                  <p>{name}</p>
                                </Link>
                                <div>
                                  <span>${price}</span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button as={Link} to="/home" size="huge">
                  Back To Homepage
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </ResponsiveContainer>
    </>
  );
};
export default OrderHistory;
