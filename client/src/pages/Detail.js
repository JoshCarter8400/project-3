import React from 'react';
import {
  Card,
  Image,
  Container,
  Header,
  Button
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SERVICE } from '../utils/queries';
import { useEffect, useState } from "react";
import Cart from "../components/Cart";

import { idbPromise } from "../utils/helpers";

import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const { id: serviceId } = useParams();
  const { loading, data } = useQuery(QUERY_SERVICE, {
    variables: { serviceId }
  });

  const service = data?.service || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <Image src={require(`../assets/${service.image}`).default} size="small" centered style={{ marginTop: 2 + "em", marginBottom: 2 + "em" }} />
        <Header style={{ marginTop: 1 + "em", textAlign: "center" }}>{service.name}</Header>
        <p>
          {service.description}
        </p>
        <p>
          Price: ${service.price}
          <br />
          <Button  primary>Add to cart</Button>
        </p>
      </Container>
      <p style={{ marginTop: 2 + "em", marginBottom: 2 + "em", textAlign: "center" }}>
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
    </div>
  );
};

export default Detail;
