//hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import data from '../../../data/univercities.json';

const DepartmentOptions = () => {
    const univercityIndex = useSelector(
        (state) => state.register.univercityValue
    );
    const isUniSelected = useSelector((state) => {
        state.register.isUnivercitySelected;
    });
    console.log(univercityIndex);

    const departments = [];
    //pulling all departments from all faculties in entire univercity

    if (univercityIndex) {
        data[1].universities[0].faculties.map((e) =>
            e.departments.forEach((e) => {
                if (e) {
                    departments.push({ label: e.name });
                }
            })
        );
    }
    console.log(univercityIndex);

    const [value, setValue] = useState(null);

    return (
        <>
            <Autocomplete
                id="Faculties"
                options={departments}
                value={value}
                freeSolo
                disabled
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

export default DepartmentOptions;
