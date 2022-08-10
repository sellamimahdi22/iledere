

import { applyMiddleware, compose } from 'redux';
import {legacy_createStore as createstore}from 'redux';
import RootReducer from './Reducers/RootReducer';
import thunk from "redux-thunk"

const devTools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store =createstore(RootReducer,compose(applyMiddleware(thunk),devTools))
  export default store