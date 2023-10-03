//packages
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Box } from '@mui/material';
//hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//datas
import data from '../../../data/univercities.json';
//functions
import { registerActions } from '../../../store/registerSlice';

const UnivercitySelect = (props) => {
    const dispatch = useDispatch();
    const [isDisable, setIsDisable] = useState(true);

    //redux statements
    const univercityRedux = useSelector(
        (state) => state.register.univercityValue
    );
    const departmentRedux = useSelector(
        (state) => state.register.departmentValue
    );

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
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    }, [department, value]);

    const univercityInputChangeHandler = () => {
        if (univercities && value) {
            univercities.forEach((e) => {
                if (e.label !== value.label) {
                    setIsDisable(false);
                    console.log(isDisable);
                }
            });
        }
    };

    return (
        <>
            <Autocomplete
                id="univercities"
                options={univercities}
                value={univercityRedux}
                freeSolo
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={univercityChangeHandler}
                onInputChange={univercityInputChangeHandler}
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    variant="contained"
                    onClick={props.activeStepDecrementHandler}
                >
                    Önceki Soru
                </Button>
                <Button
                    variant="contained"
                    onClick={props.activeStepIncrementHandler}
                    disabled={isDisable}
                >
                    Sıradaki Soru
                </Button>
            </Box>
        </>
    );
};

export default UnivercitySelect;
