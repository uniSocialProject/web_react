//packages
import { TextField } from '@mui/material';
//functions
import { loginActions } from '../../../store/loginSlice';
//hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const TelephoneInput = () => {
    const dispatch = useDispatch();
    const [enteredTel, setEnteredTel] = useState('');

    const textChangeHandler = (event) => {
        if (enteredTel.length === 2 || enteredTel.length === 6) {
            setEnteredTel(event.currentTarget.value + ' ');
        } else {
            setEnteredTel(event.currentTarget.value);
        }
    };

    const textBlurHandler = () => {
        if (enteredTel.length === 12) {
            dispatch(loginActions.telNoChanger(enteredTel));
        }
    };

    return (
        <>
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
