import { CssBaseline, Box, Typography } from '@mui/material';
//hooks
import { animated, useSpring } from '@react-spring/web';
//components
import UnivercitySelect from '../UnivercityDepartmentSelect';

const Inputs2 = (props) => {
    //animations
    const textAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
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
                <animated.div style={{ ...textAnimation }}>
                    <Typography
                        component="h1"
                        variant="h6"
                        sx={{ userSelect: 'none' }}
                    >
                        Üniversitenizi ve Bölümünüzü giriniz
                    </Typography>
                </animated.div>
                <Box component="form" onSubmit={props.submitHandler} noValidate>
                    <UnivercitySelect
                        activeStepDecrementHandler={
                            props.activeStepDecrementHandler
                        }
                        activeStepIncrementHandler={
                            props.activeStepIncrementHandler
                        }
                    />
                </Box>
            </Box>
        </>
    );
};

export default Inputs2;
