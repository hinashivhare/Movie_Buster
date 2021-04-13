import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App'
import { Provider } from "react-redux";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'antd/dist/antd.css';
import { createStore, applyMiddleware, compose} from "redux";
import Thunk from 'redux-thunk';
import Reducers from './Reducers'
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDom.render(
   <BrowserRouter>
       <Provider store={store}>
           <App/>
       </Provider>
   </BrowserRouter>,
    document.querySelector('#root')
);