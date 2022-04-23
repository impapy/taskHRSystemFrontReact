import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter} from 'react-router-dom'
import { createStore , applyMiddleware} from 'redux'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ToastContainer } from "react-toastify";
import Routes from './components/Routes'
import rootReducer from './redux/reducers/index'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>  
      <ToastContainer/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
