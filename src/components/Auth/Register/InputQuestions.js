import {
    Grid,
    Container,
    CssBaseline,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
//components
import UnivercityOptions from './UnivercityOptions';
import DepartmentOptions from './DepartmentOptions';

const InputQuestions = (props) => {
    return (
        <>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid item xs={12}>
                    {props.activeStep === 1 && (
                        <>
                            <Container
                                component="main"
                                maxWidth="xs"
                                className="bg-slate-50 shadow-xl rounded-md p-3 mt-10 "
                            >
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

                                        <Grid container textAlign={'center'}>
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
                            </Container>
                        </>
                    )}
                </Grid>
                <Grid item xs={12}>
                    {props.activeStep === 2 && (
                        <>
                            <Container
                                component="main"
                                maxWidth="xs"
                                className="bg-slate-50 shadow-xl rounded-md p-3 mt-10"
                            >
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
                                        variant="h5"
                                        mb={1.5}
                                    >
                                        Üniversite ve Bölümünüzü giriniz
                                    </Typography>
                                    <Box
                                        component="form"
                                        onSubmit={props.submitHandler}
                                        noValidate
                                    >
                                        <UnivercityOptions />
                                        <DepartmentOptions />

                                        <Grid
                                            container
                                            textAlign={'center'}
                                            mt={2}
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
                            </Container>
                        </>
                    )}
                </Grid>
                <Grid item xs={12}>
                    {props.activeStep === 3 && (
                        <>
                            <Container
                                component="main"
                                maxWidth="xs"
                                className="bg-slate-50 shadow-xl rounded-md p-3 mt-10 "
                            >
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

                                        <Grid container textAlign={'center'}>
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
                                                    color='success'
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
                            </Container>
                        </>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default InputQuestions;
