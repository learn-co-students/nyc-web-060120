import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducer'
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App randomProp="rando" /> </Provider>, document.getElementById("root"));
