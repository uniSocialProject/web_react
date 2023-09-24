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

const UnivercitySelect = () => {
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

const DepartmentOptions = () => {
    return (
        <>
            <Autocomplete
                id="Faculties"
                options={departments}
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
                    <TextField {...params} label="Bölüm" />
                )}
            />
        </>
    );
};

export { UnivercitySelect, DepartmentOptions };
