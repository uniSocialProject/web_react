import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        step: 1,
        isKvkk: false,
        //first step constants
        nameValue: '',
        surnameValue: '',
        //second step constants
        univercityValue: '',
        departmentValue: '',
        isStep2Done: false,
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
        step2DoneToggleHandler(state, action) {
            state.isStep2Done = action.payload;
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
    },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
