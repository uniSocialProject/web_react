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
import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
//functions
import { registerActions } from '../../../../store/registerSlice';
//adornments
import {
    ErrorAdornment,
    EyeEndAdornment,
} from '../../adornments/InputErrorAdornment';

const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const Inputs3 = (props) => {
    const dispatch = useDispatch();
    const emailRedux = useSelector((state) => state.register.emailValue);
    const passwordRedux = useSelector((state) => state.register.passwordValue);
    const passwordStrenght = useSelector(
        (state) => state.register.passwordStrenght
    );

    //kvkk actions
    const isKvkk = useSelector((state) => state.register.isKvkk);
    const kvkkHandler = () => {
        dispatch(registerActions.kvkkToggleHandler());
    };

    //email functions
    const [enteredEmail, setEnteredEmail] = useState(emailRedux);
    const [isEmailEntered, setIsEmailEntered] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.currentTarget.value);
        dispatch(registerActions.emailChangeHandler(event.currentTarget.value));
        let emailValidation = emailRegex.test(event.currentTarget.value);
        setIsEmailValid(emailValidation);
    };
    const emailBlurHandler = () => {
        enteredEmail ? setIsEmailEntered(true) : setIsEmailEntered(true);
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

    useEffect(() => {
        dispatch(registerActions.passwordChangeHandler(enteredPassword));
    }, [enteredPassword]);

    const passwordBlurHandler = () => {
        enteredPassword
            ? setIsPasswordEntered(true)
            : setIsPasswordEntered(true);
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

    //is form valid
    const [isFormValid, setIsFormValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    useEffect(() => {
        if (passwordStrenght >= 25) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }, [passwordStrenght]);

    useEffect(() => {
        let emailValidation = emailRegex.test(enteredEmail);
        setIsEmailValid(emailValidation);

        if (isPasswordValid && isEmailValid) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
        if (!enteredEmail || !enteredPassword) {
            setIsFormValid(false);
        }
    }, [enteredEmail, enteredPassword, isPasswordValid, isEmailValid]);

    //animations
    const textAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 50,
    });

    const emailAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
    });
    const passwordAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        delay: 200,
    });

    const passwordStrenghtBarAnimation = useSpring({
        scale: isStrenghtBarOpen ? 1 : 0,
        opacity: isStrenghtBarOpen ? 1 : 0,
        config: {
            duration: 200,
        },
    });

    const kvkkAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 400,
    });

    const prevButtonAnimation = useSpring({
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        delay: 550,
    });

    const registerButtonAnimation = useSpring({
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        delay: 700,
    });

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
                <animated.div style={{ ...textAnimation }}>
                    <Typography component="h1" variant="h5">
                        E-posta ve Yeni şifrenizi giriniz
                    </Typography>
                </animated.div>
                <Box component="form" onSubmit={props.submitHandler} noValidate>
                    <animated.div
                        style={{
                            ...emailAnimation,
                        }}
                    >
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
                    </animated.div>
                    <animated.div
                        style={{
                            ...passwordAnimation,
                        }}
                    >
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
                    </animated.div>

                    <animated.div
                        style={{
                            ...passwordStrenghtBarAnimation,
                        }}
                    >
                        <PasswordStrengthBar
                            password={enteredPassword}
                            isStrenghtBarOpen={isStrenghtBarOpen}
                        />
                    </animated.div>
                    <animated.div style={{ ...kvkkAnimation }}>
                        <FormControlLabel
                            required
                            control={<Switch />}
                            label={
                                <Typography fontSize={15} color={'GrayText'}>
                                    Kvkk Kanununu Okudum ve Kabul Ediyorum
                                </Typography>
                            }
                            onClick={kvkkHandler}
                            checked={isKvkk}
                        />
                    </animated.div>
                    <Grid container textAlign={'center'} mt={1.5}>
                        <Grid item xs={6}>
                            <animated.div
                                style={{
                                    ...prevButtonAnimation,
                                    display: 'flex',
                                    justifyContent: 'start',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={props.activeStepDecrementHandler}
                                >
                                    Önceki Soru
                                </Button>
                            </animated.div>
                        </Grid>
                        <Grid item xs={6}>
                            <animated.div
                                style={{
                                    ...registerButtonAnimation,
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={props.formSubmit}
                                    disabled={!isFormValid}
                                >
                                    Kayıt Ol
                                </Button>
                            </animated.div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Inputs3;
