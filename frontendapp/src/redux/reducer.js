import { combineReducers } from 'redux';
import {reducer as staffreducer} from './staff/Reducer';
import {reducer as studentreducer} from './student/Reducer'

const rootReducer = combineReducers({
    staff:staffreducer,
    student:studentreducer
})
export default rootReducer