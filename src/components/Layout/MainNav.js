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
    const isSmallScreen = useMediaQuery('(max-width:850px)');

    return (
        <AppBar
            position="fixed"
            style={{
                background: 'transparent',
                boxShadow: 'none',
                backdropFilter:'blur(4px)',
                px: {
                    xs: 10,
                    sm: 15,
                },
            }}
        >
            <Container maxWidth={'2000'}>
                <Toolbar
                    disableGutters
                    className='flex justify-between'
                    sx={{py:2}}
                >
                    <NavLink to={'/'}>
                        <Button
                            variant="text"
                            sx={{
                                backgroundColor: 'inherit',
                                '&.MuiButtonBase-root:hover': {
                                    bgcolor: 'transparent',
                                },
                                width: {
                                    xs: 200,
                                    sm: 220,
                                    md: 240,
                                    lg: 250,
                                    xl: 260,
                                },
                                ml: {
                                    xs: 0,
                                    sm: 1.5,
                                    md: 2,
                                    lg: 2.5,
                                    xl: 3,
                                },
                            }}
                            disableRipple
                        >
                            <img src={logo} alt="logo" draggable={false} />
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
