import React from 'react'
import { Button, ButtonGroup, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './NewOrderPage.css';
import { FormattedMessage } from 'react-intl';
import { NewOrderForm } from '../../Blocks/NewOrderForm/NewOrderForm';

export const NewOrderPage = () => {

  const navigate = useNavigate();

  const navigatoToDeliveryInformationPage = () => {
    navigate('order') // @todo: update path
  }

  return (
    <div>
        <Container>
          <h2>
          <FormattedMessage 
            id="NewOrderPage.title"
            defaultMessage="New Order"
            description="New title"
          />
          </h2>            
          <NewOrderForm />
        </Container>
    </div>
  )
}
