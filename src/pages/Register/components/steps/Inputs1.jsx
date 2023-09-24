import {
    Grid,
    CssBaseline,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { useState } from 'react';

const Inputs1 = (props) => {
    //name statements

    const [enteredName, setEnteredName] = useState('');
    const [isNameEntered, setIsNameEntered] = useState(false);
    const nameChangeHandler = (event) => {
        setEnteredName(event.currentTarget.value.trimStart());
        event.currentTarget.value.length > 1
            ? setIsNameEntered(true)
            : setIsNameEntered(false);
    };

    //surname statements
    const [enteredSurname, setEnteredSurname] = useState('');
    const [isSurnameEntered, setIsSurnameEntered] = useState(false);
    const surnameChangeHandler = (event) => {
        setEnteredSurname(event.currentTarget.value.trim());
        event.currentTarget.value.length > 1
            ? setIsSurnameEntered(true)
            : setIsSurnameEntered(false);
    };

    return (
        <Grid item xs={12}>
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
                <Box component="form" onSubmit={props.submitHandler} noValidate>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Ad"
                        name="name"
                        autoComplete="email"
                        autoFocus
                        value={enteredName}
                        onChange={nameChangeHandler}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="Soyad"
                        label="Soyad"
                        type="text"
                        id="surname"
                        value={enteredSurname}
                        onChange={surnameChangeHandler}
                    />

                    <Grid container textAlign={'center'} mt={2}>
                        <Grid item xs={12}>
                            <Button
                                disabled={!isNameEntered || !isSurnameEntered}
                                variant="contained"
                                onClick={props.activeStepIncrementHandler}
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
        </Grid>
    );
};

export default Inputs1;
