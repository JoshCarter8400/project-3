import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../utils/queries";
import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

const OrderHistory = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              {user ? (
                <>
                  <Header as="h5" style={{ fontSize: "1.33em" }}>
                    Order History for {user.username}
                  </Header>
                  {user.orders.map((order) => (
                    <Divider key={order._id} className="my-2">
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        {new Date(
                          parseInt(order.purchaseDate)
                        ).toLocaleDateString()}
                      </Header>
                      <Divider style={{ fontSize: "1.33em" }}>
                        {order.services.map(
                          ({ _id, image, name, price }, index) => (
                            <Grid.Column width={6} key={index}>
                              <Link to={`/services/${_id}`}>
                                <Image alt={name} src={`/images/${image}`} />
                                <p>{name}</p>
                              </Link>
                              <Divider>
                                <span>${price}</span>
                              </Divider>
                            </Grid.Column>
                          )
                        )}
                      </Divider>
                    </Divider>
                  ))}
                </>
              ) : null}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button as={Link} to="/" size="huge">
                Back To Homepage
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};
export default OrderHistory;
