//packages
import { Grid } from '@mui/material';
//hooks
import { useDispatch, useSelector } from 'react-redux';
//functions
import { registerActions } from '../../../store/registerSlice';
//components
import Inputs1 from './steps/Inputs1';
import Inputs2 from './steps/Inputs2';
import Inputs3 from './steps/Inputs3';
import RegisterKvkkForm from './RegisterKvkkForm';
const RegisterInput = () => {
    const dispatch = useDispatch();

    let activeStep = useSelector((state) => state.register.step);
    let isKvkk = useSelector((state) => state.register.isKvkk);

    const activeStepIncrementHandler = () => {
        if (activeStep === 3) {
            return;
        }
        activeStep++;
        dispatch(registerActions.stepChangeHandler(activeStep));
    };
    const activeStepDecrementHandler = () => {
        if (activeStep === 1) {
            return;
        }
        activeStep--;
        dispatch(registerActions.stepChangeHandler(activeStep));
    };

    const submitHandler = () => {};

    return (
        <>
            <Grid container>
                {/* {kvkk modal} */}
                {isKvkk && <RegisterKvkkForm />}

                {/* {first step} */}
                {activeStep === 1 && (
                    <Inputs1
                        activeStepIncrementHandler={activeStepIncrementHandler}
                    />
                )}

                {/* {second step} */}
                {activeStep === 2 && (
                    <Inputs2
                        activeStepDecrementHandler={activeStepDecrementHandler}
                        activeStepIncrementHandler={activeStepIncrementHandler}
                    />
                )}

                {/* {third step} */}
                {activeStep === 3 && (
                    <Inputs3
                        activeStepDecrementHandler={activeStepDecrementHandler}
                        activeStepIncrementHandler={activeStepIncrementHandler}
                    />
                )}
            </Grid>
        </>
    );
};

export default RegisterInput;
