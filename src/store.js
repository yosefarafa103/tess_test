const { configureStore } = require("@reduxjs/toolkit");
import ValuesReducer from "./getValuesSlice";
export const store = configureStore({
  reducer: {
    values: ValuesReducer,
  },
});
