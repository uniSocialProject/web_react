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
    const univercityRedux = useSelector(
        (state) => state.register.univercityValue
    );
    const departmentRedux = useSelector(
        (state) => state.register.departmentValue
    );
    const isDisabled = useSelector((state) => state.register.isDisabled);

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

    if (value) {
        SELECTED_UNIVERCITY = { label: value.label, id: value.id };
        dispatch(
            registerActions.univercityNameChangeHandler(
                SELECTED_UNIVERCITY.label
            )
        );
    }

    const univercityChangeHandler = (event, newValue) => {
        setValue(newValue);
        setDepartment(null);
    };
    //department section
    let departments = [];

    if (SELECTED_UNIVERCITY) {
        data[SELECTED_UNIVERCITY.id - 1].universities[0].faculties.map((e) =>
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
            props.nextBtnToggleHandler(true);
            dispatch(registerActions.isDisabledChangeHandler(false));
        } else {
            props.nextBtnToggleHandler(false);
            dispatch(registerActions.isDisabledChangeHandler(true));
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
