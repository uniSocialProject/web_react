import { CssBaseline, Box, Typography } from '@mui/material';
//hooks


import UnivercitySelect from '../UnivercityDepartmentSelect';

const Inputs2 = (props) => {



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
                <Typography component="h1" variant="h6" mb={1.5}>
                    Üniversitenizi ve Bölümünüzü giriniz
                </Typography>
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
