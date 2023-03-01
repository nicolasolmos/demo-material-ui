import React, { useState } from 'react'
import { TextField, Checkbox, FormControlLabel, Button, Container, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { deliveryAddressSchema } from './validateForm'
import { FormattedMessage } from 'react-intl';

export const DeliveryAddressForm = () => {
    
    const [isABuildingOrOffice, setIsABuildingOrOffice] = useState(false);
    const handleIsBuildingOrOfficeChange = () => {
        setIsABuildingOrOffice(!isABuildingOrOffice);
    };
    
    const formik = useFormik({
        initialValues: {
            direccion: '',
            altura: '',
            entrecalle1: '',
            entrecalle2: '',
            noTieneTimbre: false,
        },
        validationSchema: deliveryAddressSchema,
        onSubmit() {
            console.log('submitting');
        }
    });

    return (
        <Container>
            <h2>
                <FormattedMessage 
                    id='deliveryAddressForm.title'
                    description="Form title"    
                    defaultMessage="Delivery Information"
                />
            </h2>
            <form className='order-page-form'>
                <Stack spacing={2}>
                    <TextField 
                        label={<FormattedMessage id="deliveryAddressForm.streetAddress.input.placeholder" />} 
                        variant="filled" 
                        value={formik.values.direccion}
                        error={formik.errors.altura} 
                        helperText={formik.errors.altura}
                    />
                    <TextField label={<FormattedMessage id="deliveryAddressForm.houseNumber.input.placeholder" />} variant="filled" error={formik.errors.altura} helperText={formik.errors.altura} />
                    <TextField label={<FormattedMessage id="deliveryAddressForm.crossingStreetOne.input.placeholder" />} variant="filled" error={formik.errors.entrecalle1} helperText={formik.errors.entrecalle1} />
                    <TextField label={<FormattedMessage id="deliveryAddressForm.crossingStreetTwo.input.placeholder" />} variant="filled" error={formik.errors.entrecalle2} helperText={formik.errors.entrecalle2} />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formik.noTieneTimbre}

                            />
                        }
                        label={<FormattedMessage id="deliveryAddressForm.doesNotHaveDoorbell.checkbox.label" />} 
                    />
                    <FormControlLabel
                        control={
                            <Checkbox value={handleIsBuildingOrOfficeChange} />
                        }
                        label={<FormattedMessage id="deliveryAddressForm.isOfficeOrBuilding.checkbox.label" />} 

                        onChange={handleIsBuildingOrOfficeChange}
                    />
                    {isABuildingOrOffice ? (
                        <Stack spacing={2}>
                            <TextField label={<FormattedMessage id="deliveryAddressForm.floor.input.placeholder" />}  variant="filled" />
                            <TextField label={<FormattedMessage id="deliveryAddressForm.appartment.input.placeholder" />}  variant="filled" />
                            <TextField label={<FormattedMessage id="deliveryAddressForm.towerBuildingUnit.input.placeholder" />}  variant="filled" />
                            <TextField label={<FormattedMessage id="deliveryAddressForm.buildingUnit.input.placeholder" />}  variant="filled" />
                        </Stack>
                    ) : undefined}
                    <Button variant='contained' onClick={formik.handleSubmit}>
                    <FormattedMessage id="global.submit" description="Send button on form" defaultMessage=
                    "submit" />
                    </Button>
                </Stack>
            </form>
        </Container>
    )
};
