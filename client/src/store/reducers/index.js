import {combineReducers} from 'redux';

// reducers
import alert from 'store/reducers/alert.reducer';
import auth from 'store/reducers/auth.reducer';
import profile from 'store/reducers/profile.reducer';
import item from 'store/reducers/items.reducer';
import category from 'store/reducers/category.reducer';

export default combineReducers({
  alert,
  auth,
  profile,
  item,
  category
});