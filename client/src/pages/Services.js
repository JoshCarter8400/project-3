import React from 'react';
import {
  CardGroup,
  Header
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_SERVICES } from '../utils/queries';
import ServiceItem from '../components/ServiceItem';

const Services = () => {
  const { loading, data } = useQuery(QUERY_ALL_SERVICES);

  const services = data?.services || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(services);

  return (
    <div>
      <CardGroup centered stackable style={{marginTop: 2 + "em", marginBottom: 2 + "em"}}>
        {services && services.map(service => (
          <ServiceItem service={service} />
        ))}
      </CardGroup>
      <p style={{ marginTop: 2 + "em", marginBottom: 2 + "em", textAlign: "center" }}>
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
    </div>
  );
};

export default Services;
