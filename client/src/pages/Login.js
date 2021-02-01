import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Divider,
} from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center" dividing>
          <Image src="\logo512.png" /> Log-in to your account
        </Header>
        <Form onSubmit={handleFormSubmit} size="large">
          <Segment color="blue" inverted>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />

            {error ? (
              <Divider>
                <p>You have provided incorrect credentials</p>
              </Divider>
            ) : null}

            <Button color="teal" fluid size="large">
              Login
            </Button>
            <Segment color="blue" inverted>
              <Button animated="fade" fluid size="large">
                <Button.Content visible>New to us?</Button.Content>
                <Button.Content hidden>Sign Up!</Button.Content>
              </Button>
            </Segment>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
