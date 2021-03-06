import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { saveState, loadState } from './utilities/localStorageHelper';
import uiReducer from './reducers/ui_reducer';
import modulesReducer from './reducers/modules_reducer';

const reducer = combineReducers({
	ui: uiReducer,
	modules: modulesReducer
});

const persistedState = loadState();

const store = createStore(reducer,
	persistedState,
	applyMiddleware( thunk, logger));

store.subscribe(() => {
	// determines what is persisted in localstorage
	
	saveState();
});

export default store;
