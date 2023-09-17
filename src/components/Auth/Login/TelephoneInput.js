//packages
import { Alert, TextField } from '@mui/material';
//functions
import { loginActions } from '../../../store/loginSlice';
//hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const TelephoneInput = () => {
    const dispatch = useDispatch();
    const [enteredTel, setEnteredTel] = useState('');
    const [isInvalidTel, setIsInvalidTel] = useState(false);

    const textChangeHandler = (event) => {
        if (enteredTel.length === 2 || enteredTel.length === 6) {
            setEnteredTel(event.currentTarget.value + ' ');
        } else {
            setEnteredTel(event.currentTarget.value);
        }
    };

    const textBlurHandler = () => {
        if (enteredTel.trim().length === 12) {
            let updatedTel = enteredTel.split(' ').join('');
            console.log(updatedTel);
            if (updatedTel.length > 10) {
                setIsInvalidTel(true)
            }else{
                setIsInvalidTel(false);
            }
            dispatch(loginActions.telNoChanger(enteredTel));
        }
    };

    return (
        <>
            {isInvalidTel && (
                <Alert severity="error">
                    Telefon numaranızın 10 haneli olması gerekmektedir , lütfen
                    başına 0 koymadan deneyiniz
                </Alert>
            )}
            <TextField
                fullWidth
                autoFocus
                margin="dense"
                id="telephone"
                label="Telefon numaranızı giriniz"
                type="telephone"
                variant="standard"
                onChange={textChangeHandler}
                onBlur={textBlurHandler}
                value={enteredTel}
                inputProps={{ maxLength: 12 }}
            />
        </>
    );
};

export default TelephoneInput;
