import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
    useMediaQuery,
    AppBar,
    Toolbar,
    Container,
    Button,
} from '@mui/material';
//components
import NavDrawer from './NavDrawer';
import NavLinks from './NavLinks';

import logo from '../../images/navIcon.png';

function ResponsiveAppBar() {
    const isSmallScreen = useMediaQuery('(max-width:700px)');

    return (
        <AppBar
            position="fixed"
            style={{ background: 'transparent', boxShadow: 'none' }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <NavLink to={'/'}>
                        <Button
                            variant="text"
                            sx={{
                                backgroundColor: 'inherit',
                                ml: 0,
                                '&.MuiButtonBase-root:hover': {
                                    bgcolor: 'transparent',
                                },
                            }}
                            disableRipple
                        >
                            <img
                                src={logo}
                                alt="logo"
                                width={150}
                                draggable={false}
                            />
                        </Button>
                    </NavLink>
                    {!isSmallScreen && <NavLinks />}
                    {isSmallScreen && <NavDrawer />}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
