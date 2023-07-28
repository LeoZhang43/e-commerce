import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-rpvn6xb0cqvdwep6.us.auth0.com
// eVbd3Go5AfXE6nmT2nfA2gYpCSeEAjcy
// ZBtqlmhzIVSZoSRZH-lhGIU6IbbTSb1eSxJ-7xOslI0Rv4uqQJiA8fahjitCAMmR

ReactDOM.render(
  <Auth0Provider
    domain="dev-rpvn6xb0cqvdwep6.us.auth0.com"
    clientId="eVbd3Go5AfXE6nmT2nfA2gYpCSeEAjcy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
