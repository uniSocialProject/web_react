//packages
import { Grid } from '@mui/material';
//hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//functions
import { registerActions } from '../../../store/registerSlice';
import { registerRequest } from '../../../util/authService';
//components
import Inputs1 from './steps/Inputs1';
import Inputs2 from './steps/Inputs2';
import Inputs3 from './steps/Inputs3';
import RegisterKvkkForm from './RegisterKvkkForm';

const RegisterInput = () => {
    const dispatch = useDispatch();

    //form submition loading states
    const [isRequestPending, setIsRequestPending] = useState(false);
    const [isRequestError, setIsRequestError] = useState(false);

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
        // dispatch(registerActions.isDisabledToggleHandler())
    };

    //form submit section

    const name = useSelector((state) => state.register.nameValue);
    const surname = useSelector((state) => state.register.surnameValue);
    const university = useSelector((state) => state.register.univercityValue);
    const department = useSelector((state) => state.register.departmentValue);
    const email = useSelector((state) => state.register.emailValue);
    const emailExtension = useSelector(
        (state) => state.register.emailExtension
    );
    const password = useSelector((state) => state.register.passwordValue);

    const data = {
        name: name + '+' + surname,
        email: email + emailExtension,
        password: password,
        university: university,
        department: department,
    };

    const formSubmit = async (event) => {
        try {
            event.preventDefault();
            dispatch(registerActions.isRequestPendingHandler(true));
            setIsRequestError(false);
            const registerData = await registerRequest(data);
            dispatch(registerActions.isRequestPendingHandler(false));
            console.log(registerData);
        } catch (err) {
            dispatch(registerActions.isRequestPendingHandler(false));
            console.log(err);
        }
    };

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
                        isRequestPending={isRequestPending}
                        formSubmit={formSubmit}
                        activeStepDecrementHandler={activeStepDecrementHandler}
                    />
                )}
            </Grid>
        </>
    );
};

export default RegisterInput;
