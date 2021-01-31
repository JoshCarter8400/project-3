import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'

const ServiceItem = ({ service }) => {
  return (
    <Card>
      <Card.Content key={service._id}>
        <Image src={require(`../../assets/${service.image}`).default} />
        <Card.Header style={{marginTop: 1 + "em", textAlign: "center"}}>{service.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};


export default ServiceItem;
