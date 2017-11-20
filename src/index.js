import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import SearchBar from './components/search-bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = "7_wF0p0R7gYlmTUNXgGZCvcr";

ReactDOM.render(
    <div>
        <SearchBar/>
    </div>
  , document.querySelector('.container'));
