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
    const dispatch = useDispatch();

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
        if (department) {
            dispatch(registerActions.departmenNameChangeHandler(''));
        }
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

    //is button active
    if (department && value) {
        dispatch(registerActions.step2DoneToggleHandler(true));
    } else {
        dispatch(registerActions.step2DoneToggleHandler(false));
    }

    return (
        <>
            <Autocomplete
                id="univercitys"
                options={univercities}
                value={value}
                isOptionEqualToValue={(option, value) =>
                    option.name === value.name
                }
                autoHighlight={false}
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
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Autocomplete
                    id="departments"
                    options={departments}
                    value={department}
                    disabled={!SELECTED_UNIVERCITY}
                    onChange={departmentChangeHandler}
                    isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                    }
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
            </div>
        </>
    );
};

export default UnivercitySelect;
