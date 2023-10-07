import React, { useState, useMemo } from 'react';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    ListSubheader,
    TextField,
    InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import data from '../../../data/univercities.json';

const containsText = (text, searchUniText) =>
    text.toLowerCase().indexOf(searchUniText.toLowerCase()) > -1;

const UnivercitySelect = () => {
    //univercity section
    const [selectedUniOption, setSelectedUniOption] = useState('');
    const [searchUniText, setSearchUniText] = useState('');

    const university = [];

    for (let i = 0; i < data.length; i++) {
        university.push(data[i].universities[0].name);
    }
    const displayedUniOptions = useMemo(
        () =>
            university.filter((option) => containsText(option, searchUniText)),
        [searchUniText]
    );

    //department section
    const [selectedDepOption, setSelectedDepOption] = useState('');
    const [searchDepText, setSearchDepText] = useState('');

    const departments = [];
    let selectedUniIndex;

    const displayedDepOptions = useMemo(
        () =>
            departments.filter((selected) =>
                containsText(selected, searchDepText)
            ),
        [searchDepText]
    );

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

    return (
        <>
            <Box sx={{ width: 350, my: 2.5 }}>
                <FormControl fullWidth>
                    <InputLabel id="search-select-label" sx={{ fontSize: 14 }}>
                        Üniversite
                    </InputLabel>
                    <Select
                        // Disables auto focus on MenuItems and allows TextField to be in focus
                        MenuProps={{ autoFocus: false }}
                        labelId="search-select-label"
                        id="search-select"
                        fullWidth={true}
                        value={selectedUniOption}
                        label="Options"
                        onChange={(e) => setSelectedUniOption(e.target.value)}
                        onClose={() => setSearchUniText('')}
                        // This prevents rendering empty string in Select's value
                        // if search text would exclude currently selected option.
                        renderValue={() => selectedUniOption}
                    >
                        {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
                        <ListSubheader>
                            <TextField
                                size="small"
                                // Autofocus on textfield
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
                                    setSearchUniText(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key !== 'Escape') {
                                        // Prevents autoselecting item while typing (default Select behaviour)
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
            <Box sx={{ width: 350 }}>
                <FormControl fullWidth>
                    <InputLabel id="search-select-label" sx={{ fontSize: 14 }}>
                        Bölüm
                    </InputLabel>
                    <Select
                        // Disables auto focus on MenuItems and allows TextField to be in focus
                        MenuProps={{ autoFocus: false }}
                        disabled={!selectedUniOption}
                        labelId="search-select-label"
                        id="search-select"
                        fullWidth={true}
                        value={selectedDepOption}
                        label="Options"
                        onChange={(e) => setSelectedDepOption(e.target.value)}
                        onClose={() => setSearchDepText('')}
                        // This prevents rendering empty string in Select's value
                        // if search text would exclude currently selected option.
                        renderValue={() => selectedDepOption}
                    >
                        {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
                        <ListSubheader>
                            <TextField
                                size="small"
                                // Autofocus on textfield
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
                                        // Prevents autoselecting item while typing (default Select behaviour)
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
        </>
    );
};

export default UnivercitySelect;
