const { createSlice } = require("@reduxjs/toolkit");

const getValuesSlice = createSlice({
  initialState: "",
  name: "getValuesSlice",
  reducers: {
    getV: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { getV } = getValuesSlice.actions;
export default getValuesSlice.reducer;
