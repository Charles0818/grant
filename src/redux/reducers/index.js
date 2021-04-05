import { combineReducers } from 'redux';
import calenderReducer from "./calendar/"
import emailReducer from "./email/"
import chatReducer from "./chat/"
import todoReducer from "./todo/"
import customizer from "./customizer/"
import navbar from "./navbar/Index"
import dataList from "./data-list/"

import {
  loadingIndicatorsReducer as loadingIndicators,
} from './loadingIndicators';
import { ajaxStatuses } from './ajaxStatuses';

const allReducers = combineReducers({
  calendar: calenderReducer,
  emailApp: emailReducer,
  todoApp: todoReducer,
  chatApp: chatReducer,
  customizer: customizer,
  navbar: navbar,
  dataList: dataList,
  ajaxStatuses,
  loadingIndicators,
});

export default allReducers;
