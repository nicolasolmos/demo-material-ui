import React from 'react';
import { DeliveryAddressForm } from '../../Blocks/DeliveryAddressForm/DeliveryAddressForm';
import './OrderPage.css'

export const OrderPage = () => {

    return (
        <div className='order-page'>
            <DeliveryAddressForm />
        </div>
    );
}
