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
//components
import CustomizedSwitches from './SmsEmailSwitch';
//functions
import { loginActions } from '../../../store/loginSlice';
import TelephoneInput from './TelephoneInput';

const ForgottenPasswordModal = (props) => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.login.isModalOpen);
    const isSms = useSelector((state) => state.login.isSms);

    const closeBtnHandler = () => {
        dispatch(loginActions.modalToggleHandler());
    };

    const submitBtnHandler = () => {
        console.log('test');
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
                        />
                    )}
                    {isSms && <TelephoneInput />}
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
