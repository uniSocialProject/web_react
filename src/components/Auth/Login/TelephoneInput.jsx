//packages
import { Alert, TextField } from '@mui/material';
import InputMask from 'react-input-mask';
//functions
import { loginActions } from '../../../store/loginSlice';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const TelephoneInput = () => {
    const dispatch = useDispatch();
    const [enteredTel, setEnteredTel] = useState('');
    const [isInvalidTel, setIsInvalidTel] = useState(false);

    const textChangeHandler = (event) => {
        setEnteredTel(event.target.value);
    };

    const textBlurHandler = () => {
        dispatch(loginActions.telNoChanger(enteredTel));
    };

    return (
        <>
            {isInvalidTel && (
                <Alert severity="error">
                    Telefon numaranızın 10 haneli olması gerekmektedir , lütfen
                    başına 0 koymadan deneyiniz
                </Alert>
            )}
            {
                <InputMask
                    mask="999 999 99 99"
                    maskChar=""
                    onChange={textChangeHandler}
                    onBlur={textBlurHandler}
                    value={enteredTel}
                >
                    {() => (
                        <TextField
                            fullWidth
                            autoFocus
                            variant='standard'
                            margin="dense"
                            id="telephone"
                            label="Telefon numaranızı giriniz"
                        />
                    )}
                </InputMask>
            }
        </>
    );
};

export default TelephoneInput;
