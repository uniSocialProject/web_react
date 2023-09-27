import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        step: 1,
        isKvkk: false,
        //first step constants
        nameValue: 'Murat',
        surnameValue: 'Öztürk',
        //second step constants
        univercityValue: '',
        departmentValue: '',
        isDisabled: true,
        //third step constants
        emailValue: '',
        isEmailEntered: false,
        isEmailValid: false,
        passwordValue: '',
        isPasswordEntered: false,
        isPasswordValid: false,
        isKvkkSubmitted: false,
    },
    reducers: {
        stepChangeHandler(state, action) {
            state.step = action.payload;
        },
        kvkkToggleHandler(state) {
            state.isKvkk = !state.isKvkk;
        },
        univercityNameChangeHandler(state, action) {
            state.univercityValue = action.payload;
        },
        departmenNameChangeHandler(state, action) {
            state.departmentValue = action.payload;
        },
        nameAndSurnameChangeHandler(state, action) {
            state.nameValue = action.payload.name;
            state.surnameValue = action.payload.surname;
        },
        isDisabledToggleHandler(state) {
            if (state.departmentValue && state.univercityValue) {
                state.isDisabled = false;
            } else {
                state.isDisabled = true;
            }
        },
    },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
