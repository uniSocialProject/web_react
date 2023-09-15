//components
import CustomStepper from './CustomStepper';
import RegisterInput from './RegisterInput';
//material ui components
import { Grid, Box, Container } from '@mui/material';

const Register = () => {
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{mt:15}}
            className="bg-slate-50 shadow-xl rounded-md p-3 "
        >
            <Grid container mt={5} >
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <CustomStepper />
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <RegisterInput />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
