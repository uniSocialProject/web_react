import { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Error from '@mui/icons-material/Error';
import { animated, useSpring } from '@react-spring/web';

const LoginAlert = (props) => {
    const [open, setOpen] = useState(props.isRequestError);

    //animations
    const alertAnimation = useSpring({
        from: { y: -20, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: { duration: 300 },
    });

    return (
        <animated.div
            style={{
                ...alertAnimation,
            }}
        >
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        icon={<Error />}
                        color="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {props.errorText}
                    </Alert>
                </Collapse>
            </Box>
        </animated.div>
    );
};

export default LoginAlert;
