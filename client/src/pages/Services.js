import React from 'react';
import {
  CardGroup, Dimmer, Loader, Segment, Header
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_SERVICES } from '../utils/queries';
import ServiceItem from '../components/ServiceItem';



const Services = () => {
  const { loading, data } = useQuery(QUERY_ALL_SERVICES);

  const services = data?.services || {};

  if (loading) {
    return <div><Segment>
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>
  </Segment></div>;
  }

  return (
    <div>
      <Segment>
        <Segment inverted color="blue">
          <Header
            textAlign="center"
            as="h1"
            style={{ margin: "0.25em 0em", fontSize: "3em" }}
          >
            Services
          </Header>
        </Segment>
        

      <CardGroup centered stackable style={{marginTop: 2 + "em", marginBottom: 2 + "em"}}>
        {services && services.map(service => (
          <ServiceItem service={service} key={service._id} />
        ))}
      </CardGroup>
      <p style={{ marginTop: 2 + "em", marginBottom: 2 + "em", textAlign: "center" }}>
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
      </Segment>
    </div>
  );
};

export default Services;
