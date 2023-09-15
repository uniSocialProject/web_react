//hooks
import { useState } from 'react';
import { styled } from '@mui/material/styles';
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
        backgroundColor: '#eaeaf0',
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
    const [currentIconIndex, setCurrentIconIndex] = useState(1);

    const stepHandler = (index) => {
        setCurrentIconIndex(index + 1);
    };

    return (
        <Stack sx={{ width: '50%' }}  mt={20}>
            <Stepper
                alternativeLabel
                activeStep={currentIconIndex}
                connector={<ColorlibConnector />}
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel
                            onClick={stepHandler.bind(null, index)}
                            StepIconComponent={ColorlibStepIcon}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
};

export default CustomStepper;
