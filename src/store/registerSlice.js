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
        isDisabledToggleHandler(state, action) {
            state.isDisabled = action.payload;
        },
        emailChangeHandler(state, action) {
            state.emailValue = action.payload;
        },
        isEmailValid(state) {
            const email = state.emailValue;
            const re =
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            state.isEmailValid = re.test(email);
        },
        passwordChangeHandler(state, action) {
            state.passwordValue = action.payload;
        },
        isPasswordValid(state) {
            const password = state.passwordValue;
            if (password.length > 5) {
                state.isPasswordValid = true;
            } else {
                state.isPasswordValid = false;
            }
        },
    },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
