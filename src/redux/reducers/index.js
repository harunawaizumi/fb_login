/**
 * Created by haruna on 10/15/17.
 */
import { combineReducers } from 'redux';
import activityReducer from './../activity/reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    activityReducer,
    form: formReducer
});

export default rootReducer