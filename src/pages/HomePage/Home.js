import React from 'react';
import { Container, Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleStartNewOrder = () => {
      navigate('/new-order');
  };
  
  return (
    <div>
      <Container>
        <h2>
          <FormattedMessage
            id="home.title"
          />
        </h2>
        <Button onClick={handleStartNewOrder}>
          <FormattedMessage id="home.link.startNewOrder" />
        </Button>
      </Container>

    </div>
  )
}
