import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter,HashRouter} from "react-router-dom";

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(userReducer);
// const store = createStore(userReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <NextUIProvider>
      <GoogleOAuthProvider clientId="273697169590-2eto6orfn9htfj8luhjqrdgu01243f7m.apps.googleusercontent.com">
      <HashRouter>
        <App />
      </HashRouter>
      </GoogleOAuthProvider>
    </NextUIProvider>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
