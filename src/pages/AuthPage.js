import {
    Typography,
    Box,
    TextField,
    Grid,
    Button,
    useMediaQuery,
} from '@mui/material';
import image from '../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPasswd, setEnteredPasswd] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    let isSmallScreen = useMediaQuery('(max-width:899px)');

    useEffect(() => {
        if (isLoggedIn) {
            return navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(enteredEmail, enteredPasswd);

        return setIsLoggedIn(true);
    };

    return (
        <Box
            flexDirection={{
                xs: 'column',
                sm: 'column',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ backgroundColor: '#F7F7F7' }}
        >
            {/* {small screen uniSocial logo} */}
            {isSmallScreen && (
                <Box
                    xs={12}
                    sx={{
                        width: {
                            xs: 200,
                            sm: 250,
                        },
                        display: 'flex',
                        justifyContent: {
                            xs: 'flex-start',
                            sm: 'flex-start',
                        },
                    }}
                >
                    <img src={image} alt="logo" />
                </Box>
            )}

            {/* {big screen uniSocial logo} */}
            <Grid container>
                {!isSmallScreen && (
                    <Grid
                        item
                        xs={false}
                        sm={false}
                        md={5}
                        lg={6}
                        xl={6}
                        sx={{
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: 'no-repeat',

                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                    />
                )}

                {/* {text area} */}
                <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                    <Box
                        sx={{
                            mt: 3,
                            mb: 3,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Giriş Yap
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                mt: 1,
                                width: {
                                    xs: 270,
                                    sm: 350,
                                    lg: 600,
                                    xl: 700,
                                },
                            }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={enteredEmail}
                                onChange={(e) => {
                                    setEnteredEmail(e.target.value);
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Şifre"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={enteredPasswd}
                                onChange={(e) => {
                                    setEnteredPasswd(e.target.value);
                                }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Giriş Yap
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AuthPage;
