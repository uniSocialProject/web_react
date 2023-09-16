//packages
import {
    Divider,
    IconButton,
    InputAdornment,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material';
//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import ForgottenPasswordModal from './ForgottenPasswordModal';
//functions
import { loginActions } from '../../../store/loginSlice';

//Visibility Icon
const EndAdornment = (props) => {
    return (
        <InputAdornment position="end">
            <IconButton onClick={props.visibilityToggleHandler}>
                {props.isPasswordVisible && props.visible && <VisibilityIcon />}
                {!props.isPasswordVisible && props.visible && (
                    <VisibilityOffIcon />
                )}
            </IconButton>
        </InputAdornment>
    );
};

const SignIn = () => {
    const dispatch = useDispatch();
    //forgotten password statements
    const isModalOpen = useSelector((state) => state.login.isModalOpen);

    const forgotPasswordHandler = () => {
        dispatch(loginActions.modalToggleHandler());
    };

    //password eye icon statements
    const [isPasswordEntered, setIsPasswordEntered] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [passwordType, setPasswordType] = useState('password');

    const visibilityToggleHandler = () => {
        if (isPasswordEntered) {
            setIsPasswordVisible(false);
        }
        setIsPasswordVisible(!isPasswordVisible);
        passwordType === 'password'
            ? setPasswordType('text')
            : setPasswordType('password');
    };

    const passwordChangeHandler = (event) => {
        setIsPasswordEntered(event.currentTarget.value.length !== 0);
    };

    const submitHandler = (event) => {
        event.preventDefault();
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
                        <TextField
                            required
                            margin="normal"
                            fullWidth
                            id="email"
                            label="E-posta adresi"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={passwordChangeHandler}
                            required
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Şifre"
                            type={passwordType}
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                endAdornment: (
                                    <EndAdornment
                                        isPasswordVisible={isPasswordVisible}
                                        visibilityToggleHandler={
                                            visibilityToggleHandler
                                        }
                                        visible={isPasswordEntered}
                                    />
                                ),
                            }}
                        />
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
