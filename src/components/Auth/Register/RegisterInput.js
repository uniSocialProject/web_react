import { useState } from 'react';
import { Grid } from '@mui/material';
import InputQuestions from './InputQuestions';

const RegisterInput = () => {
    const [activeStep, setActiveStep] = useState(1);

    const activeStepIncrementHandler = () => {
        if (activeStep === 3) {
            return;
        }
        setActiveStep((prevState) => prevState + 1);
    };
    const activeStepDecrementHandler = () => {
        if (activeStep === 1) {
            return;
        }
        setActiveStep((prevState) => prevState - 1);
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
