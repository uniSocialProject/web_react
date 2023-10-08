import {
    Grid,
    CssBaseline,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
//hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';
//functions
import { registerActions } from '../../../../store/registerSlice';

const Inputs1 = (props) => {
    const dispatch = useDispatch();
    const enteredNameRedux = useSelector((state) => state.register.nameValue);
    const enteredSurnameRedux = useSelector(
        (state) => state.register.surnameValue
    );

    //name statements
    const [enteredName, setEnteredName] = useState(enteredNameRedux);
    //surname statements
    const [enteredSurname, setEnteredSurname] = useState(enteredSurnameRedux);

    //button handler
    const buttonHandler = () => {
        props.activeStepIncrementHandler();
        dispatch(
            registerActions.nameAndSurnameChangeHandler({
                name: enteredName,
                surname: enteredSurname,
            })
        );
    };

    //animations
    const nameInputAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
    });

    const surnameInputAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        delay: 200,
    });

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
                    <animated.div
                        style={{
                            width: '400px',
                            ...nameInputAnimation,
                        }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Ad"
                            name="name"
                            autoComplete="email"
                            autoFocus
                            value={enteredName}
                            onChange={(event) => {
                                setEnteredName(
                                    event.currentTarget.value.trimStart()
                                );
                            }}
                        />
                    </animated.div>
                    <animated.div
                        style={{
                            width: '400px',
                            ...surnameInputAnimation,
                        }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            name="Soyad"
                            label="Soyad"
                            type="text"
                            id="surname"
                            value={enteredSurname}
                            onChange={(event) => {
                                setEnteredSurname(
                                    event.currentTarget.value.trim()
                                );
                            }}
                        />
                    </animated.div>

                    <Grid container textAlign={'center'} mt={2}>
                        <Grid item xs={12}>
                            <Button
                                disabled={!enteredName || !enteredSurname}
                                variant="contained"
                                onClick={buttonHandler}
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
