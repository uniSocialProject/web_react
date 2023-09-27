import { Grid, CssBaseline, Box, Typography, Button } from '@mui/material';

import UnivercitySelect from '../DepartmentSelection';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Inputs2 = (props) => {
    const isDisabled = useSelector((state) => state.register.isDisabled);

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
                    <UnivercitySelect />

                    <Grid container textAlign={'center'} mt={2}>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                onClick={props.activeStepDecrementHandler}
                            >
                                Önceki Soru
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                onClick={props.activeStepIncrementHandler}
                                disabled={isDisabled}
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
        </>
    );
};

export default Inputs2;
