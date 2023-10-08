//components
import CustomStepper from '../Register/components/CustomStepper';
import RegisterInput from '../Register/components/RegisterInput';
//material ui components
import { Grid, Container } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const RegisterPage = () => {
    const boxAximation = useSpring({
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
    });


    return (
        <animated.div
            style={{
                ...boxAximation,
            }}
        >
            <Container
                component="main"
                maxWidth="xs"
                sx={{ mt: 15 }}
                className="bg-slate-50 shadow-xl rounded-md p-3 "
            >
                <Grid container mt={5}>
                    <Grid
                        item
                        xs={12}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <CustomStepper />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <RegisterInput />
                    </Grid>
                </Grid>
            </Container>
        </animated.div>
    );
};

export default RegisterPage;
