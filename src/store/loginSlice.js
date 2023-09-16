import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        //forgotten password modal
        isModalOpen: false,
        isSms: false, //isSms false means email option is selected
        //email
        isEmailEntered: false,
        isEmailCorrect: false,
        emailValue: '',
        //password
        isPasswordEntered: false,
        isPasswordCorrect: false,
        passwordValue: '',
    },
    reducers: {
        modalToggleHandler(state) {
            state.isModalOpen = !state.isModalOpen;
        },
        smsOrEmailToggleHandler(state) {
            state.isSms = !state.isSms;
        },
    },
});

export const loginActions = loginSlice.actions

export default loginSlice;
