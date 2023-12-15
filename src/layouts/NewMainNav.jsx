import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import logo from '../assets/images/navIcon.png';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MainNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                maxWidth: '80%',
                mr: '10%',
                background: 'transparent',
                boxShadow: 'none',
            }}
        >
            {/*mr = 100 - ((maxWidth * 4) / 3) */}
            <Container>
                <Toolbar disableGutters>
                    <img src={logo} style={{ width: '15%' }} />
                    <Link style={{ color: 'black' }} to={'/register-test'}>
                        register test{' '}
                    </Link>
                    <Link
                        style={{ color: 'black', marginLeft: 50 }}
                        to={'/login-test'}
                    >
                        login test
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MainNav;
