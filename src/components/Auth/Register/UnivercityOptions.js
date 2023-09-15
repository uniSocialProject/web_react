import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const univercitys = [
    { label: 'Karadeniz Teknik Üniversitesi' },
    { label: 'Ortadoğu Teknik Üniversitesi' },
    { label: 'Deneme Teknik Üniversitesi' },
];

const UnivercityOptions = () => {
    return (
        <Autocomplete
            id="univercitys"
            options={univercitys}
            sx={{ width: 300  , mb:2}}
            renderInput={(params) => (
                <TextField {...params} label="Üniversite" />
            )}
        />
    );
};

export default UnivercityOptions;
