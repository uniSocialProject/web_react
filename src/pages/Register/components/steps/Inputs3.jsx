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
        enteredEmail ? setIsEmailEntered(true) : setIsEmailEntered(false);
    };
    const emailBlurHandler = () => {
        dispatch(registerActions.emailChangeHandler(enteredEmail));
        dispatch(registerActions.isEmailValid());
    };

    //password functions
    const [enteredPassword, setEnteredPassword] = useState(passwordRedux);
    const [isStrenghtBarOpen, setIsStrenghtBarOpen] = useState(false);

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.currentTarget.value);
        event.currentTarget.value
            ? setIsStrenghtBarOpen(true)
            : setIsStrenghtBarOpen(false);
    };

    const passwordBlurHandler = () => {
        dispatch(registerActions.passwordChangeHandler(enteredPassword));
        dispatch(registerActions.isPasswordValid());
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
                        error={!isEmailValid && isEmailEntered}
                        // inputProps={{
                        //     style: { border:'1px solid ' , borderRadius:'5px'},
                        // }}
                        // InputLabelProps={{
                        //     style: { backgroundColor:'white'}
                        // }}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Yeni Şifrenizi giriniz"
                        type="password"
                        id="surname"
                        error={!isPasswordValid && isStrenghtBarOpen}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
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
