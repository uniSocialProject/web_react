import React from 'react';

import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

import CustomizedSwitches from './SmsEmailSwitch';

const ForgottenPasswordModal = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        //redux modal opener
        setOpen(true);
    };

    const handleClose = () => {
        //redux modal closer
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Şifremi yenile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Üniversite e-postanı veya telefon numaranı kullanarak
                        şifreni yenileyebilirsin
                    </DialogContentText>
                    <CustomizedSwitches />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="tel"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>İptal</Button>
                    <Button onClick={handleClose}>Onayla</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ForgottenPasswordModal;
