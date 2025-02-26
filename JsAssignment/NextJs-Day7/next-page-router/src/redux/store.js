import { createStore } from 'redux';
import quotesReducer from './reducer';

const store = createStore(quotesReducer);

export default store;