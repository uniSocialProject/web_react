//packages
import {
    Divider,
    Button,
    CssBaseline,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
//components
import {
    LoginEmailInput,
    LoginPasswordInput,
    ForgottenPasswordModal,
} from './components';
//functions
import { loginActions } from '../../store/loginSlice';
import { loginRequest } from '../../util/authService';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //is credentials invalid
    const isEmailValid = useSelector((state) => state.login.isEmailValid);
    const isPasswordValid = useSelector((state) => state.login.isPasswordValid);

    const enteredEmail = useSelector((state) => state.login.emailValue);
    const enteredPassword = useSelector((state) => state.login.passwordValue);

    const [isEmailShake, setIsEmailShake] = useState(false);
    const [isPasswordShake, setIsPasswordShake] = useState(false);

    //forgotten password statements
    const isModalOpen = useSelector((state) => state.login.isModalOpen);
    const forgotPasswordHandler = () => {
        dispatch(loginActions.modalToggleHandler());
    };

    //submit redux statementss
    const submitHandler = async (event) => {
        try {
            event.preventDefault();
            if (!isEmailValid) {
                setIsEmailShake(true);
                setTimeout(() => {
                    setIsEmailShake(false);
                }, 500);
            }
            if (!isPasswordValid) {
                setIsPasswordShake(true);
                setTimeout(() => {
                    setIsPasswordShake(false);
                }, 500);
            }

            const data = await loginRequest(enteredEmail, enteredPassword);
            localStorage.setItem('token', data.token);

            dispatch(loginActions.resetAllData());
            return navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    //is page loaded
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener('load', () => {
            setLoaded(true);
        });
        return () => {
            window.removeEventListener('load', () => {
                setLoaded(true);
            });
        };
    }, []);

    //animations
    const emailInputAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
    });

    const passwordInputAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        delay: 250,
    });

    const entireBoxAnimation = useSpring({
        from: { opacity: 0, scale: 0.7 },
        to: { opacity: 1, scale: 1 },
    });

    const loginButtonAnimation = useSpring({
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        delay: 500,
    });

    const forgottenPasswordAnimation = useSpring({
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        delay: 650,
    });

    const dividerAnimation = useSpring({
        from: { opacity: 0, scale: 0.7 },
        to: { opacity: 1, scale: 1 },
        delay: 750,
    });

    const registerButtonAnimation = useSpring({
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        delay: 800,
    });

    return (
        <>
            {isModalOpen && <ForgottenPasswordModal open={isModalOpen} />}
            <animated.div style={{ ...entireBoxAnimation }}>
                <Container
                    component="main"
                    maxWidth="xs"
                    className="bg-slate-50 shadow-xl rounded-md p-3 mt-28"
                >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Giriş yap
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={submitHandler}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            {/* {login Inputs} */}
                            <animated.div
                                style={{
                                    ...emailInputAnimation,
                                }}
                            >
                                <LoginEmailInput isEmailShake={isEmailShake} />
                            </animated.div>
                            <animated.div style={{ ...passwordInputAnimation }}>
                                <LoginPasswordInput
                                    isPasswordShake={isPasswordShake}
                                />
                            </animated.div>
                            <animated.div style={{ ...loginButtonAnimation }}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Giriş yap
                                </Button>
                            </animated.div>
                            <Grid
                                container
                                className="justify-center text-center"
                            >
                                <Grid item xs={12}>
                                    <animated.div
                                        style={{
                                            ...forgottenPasswordAnimation,
                                        }}
                                    >
                                        <Button
                                            disableRipple
                                            onClick={forgotPasswordHandler}
                                            size="medium"
                                            sx={{
                                                textTransform: 'capitalize',
                                                ':hover': {
                                                    bgcolor: 'transparent',
                                                },
                                            }}
                                        >
                                            Şifreni mi unuttun ?
                                        </Button>
                                    </animated.div>
                                </Grid>
                                <animated.div style={{ ...dividerAnimation }}>
                                    <Divider
                                        sx={{
                                            bgcolor: '#e3e5e8',
                                            px: 25,
                                            py: 0.05,
                                            my: 1,
                                        }}
                                    />
                                </animated.div>
                                <Grid item marginY={2}>
                                    <animated.div
                                        style={{ ...registerButtonAnimation }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#42b72a',
                                                pt: '4',
                                                ':hover': {
                                                    bgcolor: '#2D8D1A',
                                                },
                                            }}
                                        >
                                            Yeni hesap oluştur
                                        </Button>
                                    </animated.div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </animated.div>
        </>
    );
};

export default LoginPage;
