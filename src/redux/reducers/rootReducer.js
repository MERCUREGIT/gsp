import { createMultilanguageReducer } from "redux-multilanguage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
});

export default rootReducer;