// Dependencies
import { combineReducers } from 'redux';

// Reducers
import phones from './modules/phones/reducer';
import gui from './modules/gui/reducer';

export default combineReducers({
  phones,
  gui
});
