import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './tasks/tasks.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  tasksList: tasksReducer,
});

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
