import React from 'react'
import { Formik, Form } from 'formik';
import { Card, TextField, Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const NewOrderForm = () => {

    const productList = [
        {
            id: '1',
            name: 'Muzzarella',
            description: 'pizza tradicional solo con queso y aceitunas',
            price: {
                amount: 100,
                fractionDigits: 2,
                currency: 'USD'
            },
        },
        {
            id: '2',
            name: 'Napolitana',
            description: 'pizza tradicional solo con queso y aceitunas',
            price: {
                amount: 100,
                fractionDigits: 2,
                currency: 'USD'
            },
        },
        {
            id: '3',
            name: 'Calabresa',
            description: 'pizza tradicional solo con queso y aceitunas',
            price: {
                amount: 100,
                fractionDigits: 2,
                currency: 'USD'
            },
        },
        {
            id: '4',
            name: 'Fugazzeta',
            description: 'pizza tradicional solo con queso y aceitunas',
            price: {
                amount: 100,
                fractionDigits: 2,
                currency: 'USD'
            },
        },
    ];

    return (
        <div>
            <Formik
                initialValues={{
                    productSearch: 'a',
                    selectedProducts: [],
                }}
                onSubmit={() => { }}
            >
                {(formik) => {
                    const filteredProducts = productList.filter(product => {
                        if(!formik.values.productSearch) return false;
                        return product.name.toUpperCase().includes(formik.values?.productSearch.toUpperCase());
                    })

                    return <Form>
                        <TextField
                            fullWidth
                            id="product-search"
                            name="productSearch"
                            label={<FormattedMessage
                                id="NewOrderForm.searchProduct.input.label"
                                description="input label"
                                defaultMessage="Search your product"
                            />}
                            value={formik.values.productSearch}
                            onChange={formik.handleChange}
                        />
                        {
                            formik.values.selectedProducts?.map(product => {
                                const productSelector = `product-quantity-selector-${product.id}`;
                                return <Card>
                                    <p>{product.name}</p>
                                    <TextField
                                        type="text"
                                        id={productSelector}
                                        name={productSelector}
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        On
                                        onChange={
                                            ({
                                                target: {
                                                    value
                                                }
                                            }) => {
                                                formik.setFieldValue(productSelector, value)
                                            }
                                        }
                                        label={
                                            <FormattedMessage
                                                defaultMessage="Select the desired quantity"
                                                id="NewOrderForm.productQuantitySelector.input.label"
                                            />
                                        }
                                    ></TextField>
                                </Card>
                            })
                        }
                        {filteredProducts.map(product => (
                            <Card key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price.amount}</p>
                                <Button onClick={() => {
                                    formik.setFieldValue('selectedProducts', [
                                        ...formik.values.selectedProducts,
                                        product
                                    ]);
                                }}>
                                    <FormattedMessage
                                        id="NewOrderForm.selectItem.button.label"
                                        defaultMessage="Select Product"
                                        description="Button that selects a product"
                                    />
                                </Button>

                            </Card>
                        ))}
                    </Form>;
                }}
            </Formik>
        </div>
    );
}
