import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider} from "react-redux";
import store from "./app/store";

ReactDOM.render(
  
  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
