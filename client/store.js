import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReduces from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReduces, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
