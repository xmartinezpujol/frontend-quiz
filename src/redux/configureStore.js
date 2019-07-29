import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  )
);

export default configureStore;
