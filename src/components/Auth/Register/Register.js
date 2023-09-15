//components
import CustomStepper from './CustomStepper';
import RegisterInput from './RegisterInput';
//material ui components
import { Grid } from '@mui/material';

const Register = () => {
    return (
        <Grid container >
            <Grid item xs={12} display={'flex'} justifyContent={'center'}  >
                <CustomStepper />
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} >
                <RegisterInput />
            </Grid>
        </Grid>
    );
};

export default Register;
