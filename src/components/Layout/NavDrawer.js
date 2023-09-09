import {
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavDrawer = () => {
    var screenWidht = window.innerWidth;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                onClick={() => {
                    setIsDrawerOpen(true);
                }}
            >
                <MenuIcon fontSize='large'  />
            </IconButton>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => {
                    setIsDrawerOpen(false);
                }}
            >
                <Box p={2} width={screenWidht / 2} textAlign={'center'}>
                    <Typography variant="h6" component={'div'}>
                        Deneme
                    </Typography>
                    <List>
                        <NavLink to={'/login'}>
                            <ListItemButton
                                variant="contained"
                                sx={{
                                    mr: 2,
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    '&.MuiButtonBase-root:hover': {},
                                }}
                            >
                                Giriş Yap
                            </ListItemButton>
                        </NavLink>
                        <ListItemButton sx={{ my: 3 }}>Item2</ListItemButton>
                        <ListItemButton sx={{ my: 3 }}>Item3</ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavDrawer;
