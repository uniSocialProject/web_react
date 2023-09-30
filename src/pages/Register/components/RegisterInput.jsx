//packages
import { Grid } from '@mui/material';
//hooks
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

    //form submit section

    const name = useSelector((state) => state.register.nameValue);
    const surname = useSelector((state) => state.register.surnameValue);
    const university = useSelector((state) => state.register.univercityValue);
    const department = useSelector((state) => state.register.departmentValue);
    const email = useSelector((state) => state.register.emailValue);
    const password = useSelector((state) => state.register.passwordValue);

    const data = {
        name: name + '+' + surname,
        email: email,
        password: password,
        university: university,
        department: department,
    };
    const formSubmit = () => {
        console.log(data.name);
        registerRequest(data);
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
                        formSubmit={formSubmit}
                        activeStepDecrementHandler={activeStepDecrementHandler}
                    />
                )}
            </Grid>
        </>
    );
};

export default RegisterInput;
