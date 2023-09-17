import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        //forgotten password modal
        isModalOpen: false,
        isSms: false,
        telNo: '',
        //email
        isEmailEntered: null,
        isEmailValid: null,
        emailValue: '',
        //password
        isPasswordEntered: null,
        isPasswordValid: null,
        passwordValue: '',
    },
    reducers: {
        modalToggleHandler(state) {
            state.isModalOpen = !state.isModalOpen;
        },
        smsOrEmailToggleHandler(state) {
            state.isSms = !state.isSms;
        },
        telNoChanger(state, action) {
            state.telNo = action.payload;
        },

        //email functions
        emailChanger(state, action) {
            state.emailValue = action.payload;
        },
        isEmailEntered(state, action) {
            state.isEmailEntered = action.payload;
        },
        isEmailValid(state, action) {
            state.isEmailValid = action.payload;
        },
        //password functions

        passwordChanger(state, action) {
            state.passwordValue = action.payload;
        },
        isPasswordEntered(state, action) {
            state.isPasswordEntered = action.payload;
        },
        isPasswordValid(state, action) {
            state.isPasswordValid = action.payload;
        },
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
