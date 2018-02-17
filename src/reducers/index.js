/*
 * Dependencies
 */
// import redux
import { combineReducers } from 'redux';
// import core
import core from './core/coreReducer';
/*
 * setup
 *
 * @const willowApp
 */
const willowApp = combineReducers({
  core
});

export default willowApp
