import { createStore, combineReducers } from 'redux';
import { saveState, loadState } from 'utilities/LocalStorageHelper';
import uiReducer from './reducers/ui_reducer';

const reducer = combineReducers({
	ui: uiReducer,
});

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(() => {
	// determines what is persisted in localstorage
	saveState({

	});
});

export default store;
