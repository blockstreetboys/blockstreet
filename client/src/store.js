import { createStore, combineReducers } from 'redux';
import { saveState, loadState } from 'utilities/LocalStorageHelper'

const reducer = combineReducers({
    // reducers here
})

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(() => {
	// determines what is persisted in localstorage
	saveState({

	})
})

export default store;
