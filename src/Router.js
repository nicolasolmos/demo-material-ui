import { AppBar, MenuItem, Select, Toolbar } from '@mui/material';
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Home } from './pages/HomePage/Home';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { NewOrderPage } from './pages/NewOrderPage/NewOrderPage';

const router = createBrowserRouter([
    {
        path: '/',
        element:  <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/new-order',
        element:  <NewOrderPage />
    },
    {
        path: '/order',
        element:  <OrderPage />
    },
])

export const Router = ({ onLocaleChange, defaultLocale }) => {

  return (
    <div>
        <AppBar position='fixed'>
            <Toolbar>
                <Select defaultValue={defaultLocale} onChange={onLocaleChange}>
                    <MenuItem value='en'>English</MenuItem>
                    <MenuItem value='es'>Español</MenuItem>
                    <MenuItem value='fr'>Français</MenuItem>
                </Select>
                </Toolbar>
        </AppBar>
        <RouterProvider router={router}/>
    </div>
  )
}
