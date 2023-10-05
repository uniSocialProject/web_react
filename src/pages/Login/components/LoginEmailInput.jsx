import { TextField, keyframes } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginActions } from '../../../store/loginSlice';
import { ErrorAdornment } from './Adornments';

const spin = keyframes`
    25% {
        transform: translateX(5px)
    }
    50% {
        transform: translateX(-5px)
    }
    75% {
        transform: translateX(5px)
    }
    100% {
        transform: translateX(-5px)
    }
`;

const LoginEmailInput = (props) => {
    const dispatch = useDispatch();

    const [enteredEmail, setEnteredEmail] = useState('');
    const isEmailValid = useSelector((state) => state.login.isEmailValid);
    const isEmailEntered = useSelector((state) => state.login.isEmailEntered);

    const emailBlurHandler = () => {
        dispatch(loginActions.emailChanger(enteredEmail));
        dispatch(loginActions.isEmailEntered(enteredEmail));
        dispatch(loginActions.isEmailValid());
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.currentTarget.value);
        dispatch(loginActions.isEmailValid());
    };

    return (
        <>
            <TextField
                required
                margin="normal"
                fullWidth
                id="email"
                type="email"
                label="E-posta adresi"
                name="email"
                autoComplete="email"
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
                error={props.isEmailShake}
                sx={{
                    animation: props.isEmailShake ? `${spin} 0.3s 4 ease` : '',
                }}
                className={props.isEmailShake ? '' : ''}
                InputProps={{
                    endAdornment:
                        !isEmailValid && isEmailEntered ? (
                            <ErrorAdornment />
                        ) : (
                            ''
                        ),
                }}
            />
        </>
    );
};

export default LoginEmailInput;
