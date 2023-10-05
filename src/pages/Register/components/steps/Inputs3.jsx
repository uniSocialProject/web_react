//packages
import {
    Grid,
    Box,
    Typography,
    Button,
    TextField,
    FormControlLabel,
    Switch,
} from '@mui/material';
//components
import PasswordStrengthBar from '../PasswordStrengthBar';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//functions
import { registerActions } from '../../../../store/registerSlice';
//adornments
import {
    ErrorAdornment,
    EyeEndAdornment,
} from '../../adornments/InputErrorAdornment';

const Inputs3 = (props) => {
    const dispatch = useDispatch();
    const emailRedux = useSelector((state) => state.register.emailValue);
    const passwordRedux = useSelector((state) => state.register.passwordValue);
    const isEmailValid = useSelector((state) => state.register.isEmailValid);
    const isPasswordValid = useSelector(
        (state) => state.register.isPasswordValid
    );

    //kvkk actions
    const isKvkk = useSelector((state) => state.register.isKvkk);
    const kvkkHandler = () => {
        dispatch(registerActions.kvkkToggleHandler());
    };

    //email functions
    const [enteredEmail, setEnteredEmail] = useState(emailRedux);
    const [isEmailEntered, setIsEmailEntered] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.currentTarget.value);
    };
    const emailBlurHandler = () => {
        enteredEmail ? setIsEmailEntered(true) : setIsEmailEntered(true);
        dispatch(registerActions.emailChangeHandler(enteredEmail));
        dispatch(registerActions.isEmailValid());
    };

    //password functions
    const [enteredPassword, setEnteredPassword] = useState(passwordRedux);
    const [isPasswordEntered, setIsPasswordEntered] = useState(false);
    const [isStrenghtBarOpen, setIsStrenghtBarOpen] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.currentTarget.value);
        event.currentTarget.value
            ? setIsStrenghtBarOpen(true)
            : setIsStrenghtBarOpen(false);
    };

    const passwordBlurHandler = () => {
        enteredPassword
            ? setIsPasswordEntered(true)
            : setIsPasswordEntered(true);
        dispatch(registerActions.passwordChangeHandler(enteredPassword));
        dispatch(registerActions.isPasswordValid());
    };

    const visibilityToggleHandler = () => {
        if (isPasswordEntered) {
            setIsPasswordVisible(false);
        }
        setIsPasswordVisible(!isPasswordVisible);
        passwordType === 'password'
            ? setPasswordType('text')
            : setPasswordType('password');
    };

    return (
        <>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    E-posta ve Yeni şifrenizi giriniz
                </Typography>
                <Box component="form" onSubmit={props.submitHandler} noValidate>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        error={isEmailEntered && !isEmailValid}
                        InputProps={{
                            endAdornment:
                                !isEmailValid && isEmailEntered ? (
                                    <ErrorAdornment />
                                ) : (
                                    ''
                                ),
                        }}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Yeni Şifrenizi giriniz"
                        type={passwordType}
                        id="surname"
                        error={!isPasswordValid && isPasswordEntered}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                        InputProps={{
                            endAdornment: (
                                <EyeEndAdornment
                                    isPasswordVisible={isPasswordVisible}
                                    visibilityToggleHandler={
                                        visibilityToggleHandler
                                    }
                                    visible={enteredPassword}
                                />
                            ),
                        }}
                    />

                    <PasswordStrengthBar
                        password={enteredPassword}
                        isStrenghtBarOpen={isStrenghtBarOpen}
                    />

                    <FormControlLabel
                        required
                        control={<Switch />}
                        label={
                            <Typography fontSize={14} color={'GrayText'}>
                                Kvkk Kanununu Okudum ve Kabul Ediyorum
                            </Typography>
                        }
                        onClick={kvkkHandler}
                        checked={isKvkk}
                    />

                    <Grid container textAlign={'center'} mt={1.5}>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                onClick={props.activeStepDecrementHandler}
                            >
                                Önceki Soru
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={props.formSubmit}
                                disabled
                            >
                                Kayıt Ol
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Inputs3;
