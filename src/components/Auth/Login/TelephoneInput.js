import { useState } from 'react';
import { TextField } from '@mui/material';

const TelephoneInput = () => {
    const [enteredTel, setEnteredTel] = useState('');

    const textChangeHandler = (event) => {
        if (enteredTel.length === 2 || enteredTel.length === 6) {
            setEnteredTel(event.currentTarget.value + ' ');
        } else {
            setEnteredTel(event.currentTarget.value);
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
                value={enteredTel}
                inputProps={{ maxLength: 12 }}
            />
        </>
    );
};

export default TelephoneInput;
