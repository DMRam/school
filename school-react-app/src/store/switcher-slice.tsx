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
    metaDataLoginTrigger: false,
    metaDataSignUpTrigger: false,
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
        },
        toggleMetaDataBooleanLogin(state) {
            state.metaDataLoginTrigger = !state.metaDataLoginTrigger
        },
        toggleMetaDataBooleanSignUp(state) {
            state.metaDataSignUpTrigger = !state.metaDataSignUpTrigger
        },

    },
});

export const { toggleBoolean, addUserLogged, toggleMetaDataBooleanLogin, toggleMetaDataBooleanSignUp } =
    sliceMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceMenu.reducer;