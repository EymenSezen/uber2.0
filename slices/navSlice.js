import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  clicked:false
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {    //not reducer
    //state ve action burada yer alıyor reducer bunları değiştirerek dönüyor
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions; //for destructring

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export default navSlice.reducer;
