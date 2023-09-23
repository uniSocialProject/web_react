import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const univercitiesData = import('../../../data/univercities.json');
const univercitys = [];

for (let i = 0; i < univercitiesData.length; i++) {
    univercitys.push({ label: univercitiesData[i].universities[0].name });
}

const UnivercityOptions = () => {
    const [value, setValue] = useState(null);
    if(value){
        console.log(value.label);
    }
    return (
        <Autocomplete
            id="univercitys"
            options={univercitys}
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
