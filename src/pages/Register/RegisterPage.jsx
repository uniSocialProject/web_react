//components
import CustomStepper from '../Register/components/CustomStepper';
import RegisterInput from '../Register/components/RegisterInput';
//material ui components
import { Grid, Container } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
//hooks
import { useState, useEffect } from 'react';

const RegisterPage = () => {
    //wait for page loading
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        window.addEventListener('load', () => {
            setLoaded(true);
        });
        return () => {
            window.removeEventListener('load', () => {
                setLoaded(true);
            });
        };
    }, []);

    const boxAximation = useSpring({
        opacity: loaded ? 1 : 0,
        scale: loaded ? 1 : 0.7,
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
