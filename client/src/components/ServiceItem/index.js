import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ServiceItem = ({ service }) => {
  return (
    <Card>
      <Link to={`/services/${service._id}`}>
        <Card.Content key={service._id}>
          <Image src={`/images/${service.image}`} />
          <Card.Header style={{ marginTop: 1 + 'em', textAlign: 'center' }}>
            {service.name}
          </Card.Header>
        </Card.Content>
      </Link>
    </Card>
  );
};

export default ServiceItem;
