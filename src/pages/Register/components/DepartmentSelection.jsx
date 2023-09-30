//packages
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//datas
import data from '../../../data/univercities.json';
//functions
import { registerActions } from '../../../store/registerSlice';

const UnivercitySelect = (props) => {
    const dispatch = useDispatch();

    //redux statements
    const univercityRedux = useSelector(
        (state) => state.register.univercityValue
    );
    const departmentRedux = useSelector(
        (state) => state.register.departmentValue
    );

    let SELECTED_UNIVERCITY;
    //univercity section
    const univercities = [];
    for (let i = 0; i < data.length; i++) {
        univercities.push({
            label: data[i].universities[0].name,
            id: data[i].id,
        });
    }
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (value) {
            dispatch(registerActions.univercityNameChangeHandler(value.label));
        }
    }, [value]);

    const univercityChangeHandler = (event, newValue) => {
        setValue(newValue);
        setDepartment(null);
        if (value) {
            dispatch(registerActions.univercityNameChangeHandler(value.label));
        }
        dispatch(registerActions.departmenNameChangeHandler(''));
    };
    //department section
    let departments = [];

    if (value) {
        data[value.id - 1].universities[0].faculties.map((e) =>
            e.departments.forEach((e) => {
                if (e) {
                    departments.push({ label: e.name });
                }
            })
        );
    }

    const [department, setDepartment] = useState(null);

    const departmentChangeHandler = (event, newValue) => {
        if (newValue) {
            setDepartment(newValue);
            dispatch(
                registerActions.departmenNameChangeHandler(newValue.label)
            );
        } else {
            setDepartment(newValue);
            dispatch(registerActions.departmenNameChangeHandler(''));
        }
    };

    // is button active
    useEffect(() => {
        if (department && value) {
            dispatch(registerActions.isDisabledToggleHandler());
        } else {
            dispatch(registerActions.isDisabledToggleHandler());
        }
    }, [department, value]);

    return (
        <>
            <Autocomplete
                id="univercities"
                options={univercities}
                value={univercityRedux}
                freeSolo
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={univercityChangeHandler}
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

            <Autocomplete
                id="departments"
                options={departments}
                value={departmentRedux}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={departmentChangeHandler}
                disabled={false}
                freeSolo
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

export default UnivercitySelect;
