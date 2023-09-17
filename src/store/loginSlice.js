import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        //forgotten password modal
        isModalOpen: false,
        isSms: false,
        telNo: '',
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
        telNoChanger(state, action) {
            state.telNo = action.payload;
        },
        emailChanger(state,action){
            state.emailValue = action.payload
        }
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
