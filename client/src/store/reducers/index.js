import {combineReducers} from 'redux';

// reducers
import alert from 'store/reducers/alert.reducer';
import auth from 'store/reducers/auth.reducer';

export default combineReducers({
  alert,
  auth
});