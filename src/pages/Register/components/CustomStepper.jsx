//hooks
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { registerActions } from '../../../store/registerSlice';
import { animated, useSpring } from '@react-spring/web';
import { useState, useEffect } from 'react';
//material ui components
import {
    Stack,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    stepConnectorClasses,
} from '@mui/material';
//material ui icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import LoginIcon from '@mui/icons-material/Login';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
        left: 'calc(-50% + 24px)',
        right: 'calc(50% + 24px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#ccc',
        },
    },
    //connector between icons
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#4583BD',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#ccc',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    //next step
    ...(ownerState.active && {
        backgroundColor: '#ccc',
    }),
    // completed step
    ...(ownerState.completed && {
        backgroundColor: '#1976d2',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <AccountCircleIcon />,
        2: <SchoolIcon />,
        3: <LoginIcon />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = ['Öğrenci bilgileri', 'Üniversite Bilgileri', 'Giriş Bilgileri'];

const CustomStepper = () => {
    const dispatch = useDispatch();
    const activeStep = useSelector((state) => state.register.step);

    const stepHandler = (index) => {
        dispatch(registerActions.stepChangeHandler(index + 1));
    };

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

    //animations
    const step1animation = useSpring({
        scale: loaded ? 1 : 0,
        delay: 150,
    });
    const step2animation = useSpring({
        scale: loaded ? 1 : 0,
        delay: 300,
    });
    const step3animation = useSpring({
        scale: loaded ? 1 : 0,
        delay: 450,
    });

    const connectorAnimation = useSpring({
        opacity: loaded ? 1 : 0,
        delay: 550,
    });

    return (
        <Stack sx={{ width: '100%' }}>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={
                    <animated.div style={{ ...connectorAnimation }}>
                        <ColorlibConnector />
                    </animated.div>
                }
            >
                <Step key={'Öğrenci Bilgileri'}>
                    <animated.div
                        style={{
                            ...step1animation,
                        }}
                    >
                        <StepLabel
                            onClick={stepHandler.bind(null, 0)}
                            StepIconComponent={ColorlibStepIcon}
                        >
                            {'Öğrenci Bilgileri'}
                        </StepLabel>
                    </animated.div>
                </Step>
                <Step key={'Üniversite Bilgileri'}>
                    <animated.div
                        style={{
                            ...step2animation,
                        }}
                    >
                        <StepLabel
                            onClick={stepHandler.bind(null, 1)}
                            StepIconComponent={ColorlibStepIcon}
                        >
                            {'Üniversite Bilgileri'}
                        </StepLabel>
                    </animated.div>
                </Step>
                <Step key={'Giriş Bilgileri'}>
                    <animated.div
                        style={{
                            ...step3animation,
                        }}
                    >
                        <StepLabel
                            onClick={stepHandler.bind(null, 2)}
                            StepIconComponent={ColorlibStepIcon}
                        >
                            {'Giriş Bilgileri'}
                        </StepLabel>
                    </animated.div>
                </Step>
            </Stepper>
        </Stack>
    );
};

export default CustomStepper;
