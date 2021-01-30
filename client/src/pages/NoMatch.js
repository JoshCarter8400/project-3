import React from 'react';
import { Container } from 'semantic-ui-react';

const NoMatch = () => {
  return (
    <Container>
      <h1>404 Page Not Found</h1>
      <h2>
        {' '}
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h2>
    </Container>
  );
};

export default NoMatch;
