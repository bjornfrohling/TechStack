import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Add app launch the reducers will be called 1 time
export default combineReducers({libraries: LibraryReducer, selectedLibraryId: SelectionReducer});