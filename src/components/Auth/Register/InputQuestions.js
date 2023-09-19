import { useState } from 'react';
import {
    Grid,
    Container,
    CssBaseline,
    Box,
    Typography,
    TextField,
    Button,
    FormControlLabel,
    Switch,
    InputAdornment,
    Tooltip,
    LinearProgress,
} from '@mui/material';

//components
import UnivercityOptions from './UnivercityOptions';
import DepartmentOptions from './DepartmentOptions';
import RegisterKvkkForm from './RegisterKvkkForm';
//icons
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PasswordStrengthBar from './PasswordStrengthBar';

const InputQuestions = (props) => {
    //email input tooltip
    const EmailEndAdornment = () => {
        return (
            <>
                <InputAdornment position="end">
                    <Tooltip
                        title={'Üniversite öğrenci e-postanı girmelisin'}
                        placement="top"
                    >
                        <InfoIcon />
                    </Tooltip>
                </InputAdornment>
            </>
        );
    };

    //password done icon
    const PasswordEndAdornment = () => {
        return (
            <>
                <InputAdornment position="end">
                    <CheckCircleIcon color="success" fontSize="medium" />
                </InputAdornment>
            </>
        );
    };

    //kvkk functions
    const [isKvkk, setIsKvkk] = useState(false);
    const kvkkHandler = () => {
        setIsKvkk((prev) => !prev);
    };

    //password functions
    const [passwordValue, setPasswordValue] = useState('');
    const [isPasswordEntered, setIsPasswordEntered] = useState(false);
    const [isStrenghtBarOpen , setIsStrenghtBarOpen] = useState(false);
    const passwordChangeHandler = (event) => {
        setPasswordValue(event.currentTarget.value);
        event.currentTarget.value
            ? setIsStrenghtBarOpen(true)
            : setIsStrenghtBarOpen(false);
    };

    return (
        <>
            {/* {kvkk submit modal} */}
            {isKvkk && <RegisterKvkkForm />}
            <Grid container display={'flex'} justifyContent={'center'}>
                {/* {first questions} */}
                <Grid item xs={12}>
                    {props.activeStep === 1 && (
                        <>
                            <CssBaseline />
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    Adınızı ve soyadınızı giriniz
                                </Typography>
                                <Box
                                    component="form"
                                    onSubmit={props.submitHandler}
                                    noValidate
                                >
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="name"
                                        label="Ad"
                                        name="name"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="Soyad"
                                        label="Soyad"
                                        type="text"
                                        id="surname"
                                    />

                                    <Grid container textAlign={'center'} mt={2}>
                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                onClick={
                                                    props.activeStepIncrementHandler
                                                }
                                            >
                                                Sıradaki Soru
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        className="justify-center text-center"
                                    ></Grid>
                                </Box>
                            </Box>
                        </>
                    )}
                </Grid>
                {/* {second questions} */}
                <Grid item xs={12}>
                    {props.activeStep === 2 && (
                        <>
                            <CssBaseline />
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    mb={1.5}
                                >
                                    Üniversitenizi ve Bölümünüzü giriniz
                                </Typography>
                                <Box
                                    component="form"
                                    onSubmit={props.submitHandler}
                                    noValidate
                                >
                                    <UnivercityOptions />
                                    <DepartmentOptions />

                                    <Grid container textAlign={'center'} mt={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                onClick={
                                                    props.activeStepDecrementHandler
                                                }
                                            >
                                                Önceki Soru
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                onClick={
                                                    props.activeStepIncrementHandler
                                                }
                                            >
                                                Sıradaki Soru
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        className="justify-center text-center"
                                    ></Grid>
                                </Box>
                            </Box>
                        </>
                    )}
                </Grid>
                {/* {third question} */}
                <Grid item xs={12}>
                    {props.activeStep === 3 && (
                        <>
                            <CssBaseline />
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
                                <Box
                                    component="form"
                                    onSubmit={props.submitHandler}
                                    noValidate
                                >
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        label="E-mail"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        InputProps={{
                                            endAdornment: <EmailEndAdornment />,
                                        }}
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Yeni Şifrenizi giriniz"
                                        type="password"
                                        id="surname"
                                        onChange={passwordChangeHandler}
                                        value={passwordValue}
                                        InputProps={{
                                            endAdornment: (
                                                <PasswordEndAdornment />
                                            ),
                                        }}
                                    />
                                    {isStrenghtBarOpen && (
                                        <PasswordStrengthBar
                                            password={passwordValue}
                                        />
                                    )}
                                    <FormControlLabel
                                        required
                                        control={<Switch />}
                                        label={
                                            <Typography
                                                fontSize={14}
                                                color={'GrayText'}
                                            >
                                                Kvkk Kanununu Okudum ve Kabul
                                                Ediyorum
                                            </Typography>
                                        }
                                        onClick={kvkkHandler}
                                        checked={isKvkk}
                                    />

                                    <Grid
                                        container
                                        textAlign={'center'}
                                        mt={1.5}
                                    >
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                onClick={
                                                    props.activeStepDecrementHandler
                                                }
                                            >
                                                Önceki Soru
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                onClick={
                                                    props.activeStepIncrementHandler
                                                }
                                            >
                                                Kayıt Ol
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default InputQuestions;
