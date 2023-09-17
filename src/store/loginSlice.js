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
            action.payload.trim().length
                ? (state.isEmailEntered = true)
                : (state.isEmailEntered = false);
        },
        isEmailValid(state, action) {
            const email = action.payload;
            const re =
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            state.isEmailValid = re.test(email);
        },
        //password functions

        passwordChanger(state, action) {
            state.passwordValue = action.payload;
        },
        isPasswordEntered(state) {
            state.passwordValue
                ? (state.isPasswordEntered = true)
                : (state.isPasswordEntered = false);
        },
        isPasswordValid(state, action) {
            const isValid = action.payload.trim().length > 6;
            state.isPasswordValid = isValid;
        },
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
