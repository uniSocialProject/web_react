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

    //kvkk actions
    const isKvkk = useSelector((state) => state.register.isKvkk);
    const kvkkHandler = () => {
        dispatch(registerActions.kvkkToggleHandler());
    };

    //password functions
    const [passwordValue, setPasswordValue] = useState('');
    const [isStrenghtBarOpen, setIsStrenghtBarOpen] = useState(false);
    const passwordChangeHandler = (event) => {
        setPasswordValue(event.currentTarget.value);
        event.currentTarget.value
            ? setIsStrenghtBarOpen(true)
            : setIsStrenghtBarOpen(false);
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
                        autoFocus
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
                    />
                    {isStrenghtBarOpen && (
                        <PasswordStrengthBar password={passwordValue} />
                    )}
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
                                onClick={props.activeStepIncrementHandler}
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
