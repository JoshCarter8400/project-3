import gql from 'graphql-tag';

export const QUERY_SERVICE = gql`
  query service($serviceId: ID!) {
    service(_id: $serviceId) {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_ALL_SERVICES = gql`
  {
    services {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;

export const QUERY_REVIEW = gql`
  query review($id: ID!) {
    review(_id: $id) {
      _id
      thoughtText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String) {
    user(username: $username) {
      _id
      username
      email
      reviews {
        _id
        reviewText
        createdAt
        orders {
          _id
          purchaseDate
          services {
            _id
            name
            description
            price
            quantity
            image
          }
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      reviews {
        _id
        reviewText
        createdAt
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($services: [ID]!) {
    checkout(services: $services) {
      session
    }
  }
`;
