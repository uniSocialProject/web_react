import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        step: 1,
        //first step constants
        nameValue: '',
        isNameEntered: false,
        surnameValue: '',
        isSurnameEntered: false,
        //second step constants
        univercityValue: '',
        isUnivercitySelected: false,
        departmentValue: '',
        isDepartmenSelected: false,
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
        stepChangeHandler(state,action){
            state.step = action.payload
        }
    },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
