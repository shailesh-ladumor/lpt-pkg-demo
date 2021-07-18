# Welcome To Laravel Package Tutorial
## Step: 1
`npm install redux react-redux redux-thunk`

## Step:2
 Create a Store

## Step:3
### Configer Index.js

```
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './store/reducers';
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

```

```
  <Provider store={store}>
    .... App here
  </Provider>
```
