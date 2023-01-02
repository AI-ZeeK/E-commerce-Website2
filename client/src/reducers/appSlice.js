import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	isSignUp: false,
	isNavOpen: false,
};

const appSlice = createSlice({
	name: "grey",
	initialState,
	reducers: {
		setIsSignUp: (state) => {
			state.isSignUp = !state.isSignUp;
		},
		setIsNavOpen: (state) => {
			state.isNavOpen = !state.isNavOpen;
		},
	},
});

export const { setIsSignUp, setIsNavOpen } = appSlice.actions;

export default appSlice.reducer;
