import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const departments = [
    { label: 'Bilgisayar Mühendisliği' },
    { label: 'Tıp' },
    { label: 'deneme mühendisliği' },
];

const DepartmentOptions = () => {
    return (
        <Autocomplete
            id="department"
            options={departments}
            sx={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Bölüm" />}
        />
    );
};

export default DepartmentOptions;
