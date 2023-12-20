import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../interfaces/UserInterface";
import { RootState } from "./index";

interface ToggleState {
    isVisible: boolean;
}

const userLogged: UserInterface =
{
    id: '',
    name: "",
    lastName: "",
    email: "",
    password: ""
}




const initialState = {
    isVisible: false,
    userLogged
};

const sliceMenu = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleBoolean(state) {
            state.isVisible = !state.isVisible;
        },
        addUserLogged(state, action) {
            state.userLogged = action.payload
        }

    },
});

export const { toggleBoolean, addUserLogged } =
    sliceMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceMenu.reducer;