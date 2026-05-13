import { combineReducers } from 'redux';

import guides from "./guides";
import filter from "./filter";


export default combineReducers({
    guides,
    filter
    });