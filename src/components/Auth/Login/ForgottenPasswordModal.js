//packages
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//components
import CustomizedSwitches from './SmsEmailSwitch';
//functions
import { loginActions } from '../../../store/loginSlice';
import TelephoneInput from './TelephoneInput';

const ForgottenPasswordModal = (props) => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.login.isModalOpen);
    const isSms = useSelector((state) => state.login.isSms);
    const enteredTel = useSelector((state) => state.login.telNo);
    const enteredEmail = useSelector((state) => state.login.emailValue);

    //email change statements
    const [email, setEmail] = useState(enteredEmail);
    const emailChangeHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    //modal close function
    const closeBtnHandler = () => {
        dispatch(loginActions.modalToggleHandler());
    };

    //form submit function
    const submitBtnHandler = () => {
        isSms ? console.log(enteredTel) : console.log(email);
        dispatch(loginActions.modalToggleHandler());
    };

    return (
        <div>
            <Dialog open={isModalOpen} onClose={closeBtnHandler}>
                <DialogTitle>Şifremi yenile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Üniversite e-postanı veya telefon numaranı kullanarak
                        şifreni yenileyebilirsin
                    </DialogContentText>
                    <CustomizedSwitches />
                    {!isSms && (
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Üniversite e-postanızı giriniz"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={emailChangeHandler}
                        />
                    )}
                    {isSms && (
                        <TelephoneInput submitHandler={props.submitHandler} />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeBtnHandler}>İptal</Button>
                    <Button onClick={submitBtnHandler}>Onayla</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ForgottenPasswordModal;
