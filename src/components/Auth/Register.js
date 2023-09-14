//components
import CustomStepper from './CustomStepper';
//material ui components
import { Grid } from '@mui/material';

const Register = () => {
    return (
        <Grid container>
            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                <CustomStepper />
            </Grid>
        </Grid>
    );
};

export default Register;
