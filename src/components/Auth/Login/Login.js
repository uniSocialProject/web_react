//packages
import {
    Divider,
    Button,
    CssBaseline,
    Grid,
    Box,
    Typography,
    Container,
    keyframes,
} from '@mui/material';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//components
import ForgottenPasswordModal from './ForgottenPasswordModal';
import LoginEmailInput from './LoginEmailInput';
import LoginPasswordInput from './LoginPasswordInput';
//functions
import { loginActions } from '../../../store/loginSlice';

//invalid credentials shake animation
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

const SignIn = () => {
    const dispatch = useDispatch();
    //is credentials invalid
    const isEmailValid = useSelector((state) => state.login.isEmailValid);
    const isPasswordValid = useSelector((state) => state.login.isPasswordValid);

    const [isEmailShake, setIsEmailShake] = useState(false);
    const [isPasswordShake, setIsPasswordShake] = useState(false);

    //forgotten password statements
    const isModalOpen = useSelector((state) => state.login.isModalOpen);
    const forgotPasswordHandler = () => {
        dispatch(loginActions.modalToggleHandler());
    };

    //submit redux statementss
    const submitHandler = (event) => {
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

        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            {isModalOpen && <ForgottenPasswordModal open={isModalOpen} />}
            <Container
                component="main"
                maxWidth="xs"
                className="bg-slate-50 shadow-xl rounded-md p-3 mt-28"
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
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
                        <LoginEmailInput isEmailShake={isEmailShake} />
                        <LoginPasswordInput isPasswordShake={isPasswordShake} />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, textTransform: 'capitalize' }}
                        >
                            Giriş yap
                        </Button>
                        <Grid container className="justify-center text-center">
                            <Grid item xs={12}>
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
                            </Grid>
                            <Divider
                                sx={{
                                    bgcolor: '#e3e5e8',
                                    px: 25,
                                    py: 0.05,
                                    my: 1,
                                }}
                            />
                            <Grid item marginY={2}>
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
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default SignIn;
