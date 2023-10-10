import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        isFirstLoad: true,
        step: 1,
        isKvkk: false,
        //first step constants
        nameValue: 'Murat',
        surnameValue: 'Öztürk',
        //second step constants
        univercityValue: '',
        departmentValue: '',
        //third step constants
        emailValue: '',
        isEmailValid: false,
        passwordValue: '',
        isPasswordEntered: false,
        isPasswordValid: null,
        isKvkkSubmitted: false,
        passwordStrenght: 0,
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
        emailChangeHandler(state, action) {
            state.emailValue = action.payload;
        },
        passwordChangeHandler(state, action) {
            state.passwordValue = action.payload;
        },
        passwordStrenghtChangeHandler(state, action) {
            state.passwordStrenght = action.payload;
        },
        isFirstLoadHandler(state, action) {
            state.isFirstLoad = action.payload;
        },
    },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
