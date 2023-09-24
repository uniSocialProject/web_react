//packages
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//datas
import data from '../../../data/univercities.json';
//functions
import { registerActions } from '../../../store/registerSlice';

const univercities = [];

for (let i = 0; i < data.length; i++) {
    univercities.push({ label: data[i].universities[0].name, id: data[i].id });
}
const UnivercityOptions = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(null);

    if (value) {
        dispatch(
            registerActions.univercityValueHandler({
                id: value.id,
                name: value.label,
            })
        );
    }

    return (
        <Autocomplete
            id="univercitys"
            options={univercities}
            value={value}
            freeSolo
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                width: {
                    xs: 300,
                    md: 350,
                },
                mb: 2,
            }}
            renderInput={(params) => (
                <TextField {...params} label="Üniversite" />
            )}
        />
    );
};

export default UnivercityOptions;
