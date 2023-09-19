import { useState } from 'react';
import { Grid } from '@mui/material';
import InputQuestions from './InputQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { registerActions } from '../../../store/registerSlice';

const RegisterInput = () => {
    let activeStep = useSelector((state) => state.register.step);
    const dispatch = useDispatch();

    const activeStepIncrementHandler = () => {
        if (activeStep === 3) {
            return;
        }
        activeStep++
        dispatch(registerActions.stepChangeHandler(activeStep));
    };
    const activeStepDecrementHandler = () => {
        if (activeStep === 1) {
            return;
        }
        activeStep--
        dispatch(registerActions.stepChangeHandler(activeStep));
    };

    const submitHandler = () => {};

    return (
        <>
            <Grid container>
                <Grid container>
                    <InputQuestions
                        activeStepIncrementHandler={activeStepIncrementHandler}
                        activeStepDecrementHandler={activeStepDecrementHandler}
                        submitHandler={submitHandler}
                        activeStep={activeStep}
                        xs={12}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default RegisterInput;
