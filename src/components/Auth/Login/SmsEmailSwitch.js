import { useState } from 'react';
import {
    Grid,
    styled,
    FormGroup,
    FormControlLabel,
    Switch,
    Stack,
    Typography,
} from '@mui/material';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(5px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('https://img.icons8.com/material-outlined/24/chat.png')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                //switch track color
                backgroundColor: '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        //button color
        backgroundColor: 'white',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('https://img.icons8.com/material-outlined/24/new-post.png')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export default function CustomizedSwitches() {
    const [isSms, setIsSms] = useState(true);

    const switchHandler = () => {
        setIsSms((prev) => !prev);
    };

    return (
        <FormGroup>
            <Grid container>
                <Grid item xs={6} display={'flex'} justifyContent={'right'}>
                    <FormControlLabel
                        control={
                            <MaterialUISwitch sx={{ my: 2 }} defaultChecked />
                        }
                        onClick={switchHandler}
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                    display={'flex'}
                    justifyContent={'left'}
                    alignItems={'center'}
                >
                    <Typography>
                        {isSms
                            ? 'Sms ile Şifreyi Yenile'
                            : 'Öğrenci e-postası ile şifremi yenile'}
                    </Typography>
                </Grid>
            </Grid>
        </FormGroup>
    );
}
