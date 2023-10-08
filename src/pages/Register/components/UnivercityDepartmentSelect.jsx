//hooks
import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';
//packages
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    ListSubheader,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material';
//functions
import { registerActions } from '../../../store/registerSlice';
//icons
import SearchIcon from '@mui/icons-material/Search';
//datas
import data from '../../../data/univercities.json';

const containsText = (text, searchUniText) =>
    text.toLowerCase().indexOf(searchUniText.toLowerCase()) > -1;

const UnivercitySelect = (props) => {
    const universityRedux = useSelector(
        (state) => state.register.univercityValue
    );
    const departmentRedux = useSelector(
        (state) => state.register.departmentValue
    );
    const dispatch = useDispatch();
    //univercity section
    const [selectedUniOption, setSelectedUniOption] = useState(universityRedux);
    const [searchUniText, setSearchUniText] = useState('');

    const university = [];

    //fetch all university data
    for (let i = 0; i < data.length; i++) {
        university.push(data[i].universities[0].name);
    }
    //univercity search filter function
    const displayedUniOptions = useMemo(
        () =>
            university.filter((option) => containsText(option, searchUniText)),
        [searchUniText]
    );

    const univercityChangeHandler = (event) => {
        setSelectedUniOption(event.target.value);
        setSelectedDepOption('');
        dispatch(
            registerActions.univercityNameChangeHandler(event.target.value)
        );
        dispatch(registerActions.departmenNameChangeHandler(''));
    };

    //department section
    const [selectedDepOption, setSelectedDepOption] = useState(departmentRedux);
    const [searchDepText, setSearchDepText] = useState('');
    const [displayedDepOptions, setDisplayedDepOptions] = useState([]);

    const departments = [];
    let selectedUniIndex;

    //fetching all departments of the selected univercity
    if (selectedUniOption) {
        for (let i = 0; i < data.length; i++) {
            const allUniversities = data[i].universities;
            if (allUniversities[0].name === selectedUniOption) {
                selectedUniIndex = i;
                break;
            }
        }
        const selectedUni = data[selectedUniIndex].universities;
        for (let key of selectedUni) {
            key.faculties.forEach((e) => {
                e.departments.forEach((e) => {
                    departments.push(e.name);
                });
            });
        }
    }

    const departmentChangeHandler = (event) => {
        setSelectedDepOption(event.target.value);
        dispatch(
            registerActions.departmenNameChangeHandler(event.target.value)
        );
    };

    //department search filter function
    useEffect(() => {
        const depOptions = departments.filter((selected) =>
            containsText(selected, searchDepText)
        );
        setDisplayedDepOptions(depOptions);
    }, [searchDepText, selectedUniOption]);

    //is disable
    const [isDisable, setIsDisable] = useState(true);
    useEffect(() => {
        if (selectedUniOption && selectedDepOption) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    }, [selectedUniOption, selectedDepOption]);

    //animations
    const univercityAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
    });
    const departmentAnimation = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        delay: 200,
    });

    return (
        <>
            <animated.div
                style={{
                    ...univercityAnimation,
                }}
            >
                <Box sx={{ width: 350, my: 2.5 }}>
                    <FormControl fullWidth>
                        <InputLabel
                            id="search-select-label"
                            sx={{ fontSize: 14 }}
                        >
                            Üniversite
                        </InputLabel>
                        <Select
                            MenuProps={{ autoFocus: false }}
                            labelId="search-select-label"
                            id="search-select"
                            fullWidth={true}
                            value={selectedUniOption}
                            label="Options"
                            defaultValue=""
                            onChange={univercityChangeHandler}
                            onClose={() => setSearchUniText('')}
                            renderValue={() => selectedUniOption}
                        >
                            <ListSubheader>
                                <TextField
                                    size="small"
                                    autoFocus
                                    placeholder="Type to search..."
                                    fullWidth
                                    sx={{ my: 1 }}
                                    variant="standard"
                                    defaultValue=""
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) =>
                                        setSearchUniText(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key !== 'Escape') {
                                            e.stopPropagation();
                                        }
                                    }}
                                />
                            </ListSubheader>
                            {displayedUniOptions.map((option, i) => (
                                <MenuItem key={i} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </animated.div>
            <animated.div
                style={{
                    ...departmentAnimation,
                }}
            >
                <Box sx={{ width: 350 }}>
                    <FormControl fullWidth>
                        <InputLabel
                            id="search-select-label"
                            sx={{ fontSize: 14 }}
                        >
                            Bölüm
                        </InputLabel>
                        <Select
                            MenuProps={{ autoFocus: false }}
                            disabled={!selectedUniOption}
                            labelId="search-select-label"
                            id="search-select"
                            fullWidth={true}
                            value={selectedDepOption}
                            label="Options"
                            defaultValue=""
                            onChange={departmentChangeHandler}
                            onClose={() => setSearchDepText('')}
                            renderValue={() => selectedDepOption}
                        >
                            <ListSubheader>
                                <TextField
                                    size="small"
                                    autoFocus
                                    placeholder="Type to search..."
                                    fullWidth
                                    sx={{ my: 1 }}
                                    variant="standard"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) =>
                                        setSearchDepText(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key !== 'Escape') {
                                            e.stopPropagation();
                                        }
                                    }}
                                />
                            </ListSubheader>
                            {displayedDepOptions.map((option, i) => (
                                <MenuItem key={i} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </animated.div>
            <Box
                sx={{
                    my: 3,
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