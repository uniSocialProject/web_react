import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';

const PasswordStrengthBar = ({ password }) => {
    const calculateStrength = (password) => {
        const length = password.length;
        let score = 0;

        if (length > 0) {
            score += 10;
        }
        if (length >= 8) {
            score += 10;
        }

        if(/(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])/.test(password)){
            score += 20
        }

        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            score += 20;
        }

        if (/\d/.test(password)) {
            score += 20;
        }

        if (/[^a-zA-Z\d]/.test(password)) {
            score += 20;
        }

        return score;
    };

    const getPasswordStrengthColor = (strength) => {
        if (strength < 25) {
            return 'error';
        } else if (strength < 50) {
            return 'warning';
        } else if (strength < 75) {
            return 'info';
        } else {
            return 'success';
        }
    };

    const passwordStrength = calculateStrength(password);
    const strengthColor = getPasswordStrengthColor(passwordStrength);

    return (
        <div>
            <Grid container display={'flex'} alignItems={'center'} my={1}>
                <Grid item xs={1} display={'flex'} justifyContent={'center'}>
                    <GppGoodIcon color={strengthColor} />
                </Grid>
                <Grid item xs={11}>
                    <LinearProgress
                        color={strengthColor}
                        variant="determinate"
                        value={passwordStrength}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            bgcolor: strengthColor,
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default PasswordStrengthBar;