import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface ToggleState {
    isVisible: boolean;
}



const initialState: ToggleState = {
    isVisible: false,
};

const sliceMenu = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleFunction(state) {
            state.isVisible = !state.isVisible;
        },
        
    },
});

export const { toggleFunction } =
    sliceMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceMenu.reducer;