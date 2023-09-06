import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import logo from '../images/navIcon.png';

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
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
                    <Button
                        variant="text"
                        sx={{
                            backgroundColor: 'inherit',
                            marginLeft: 5,
                            padding: 0,
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
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                disableRipple
                                key={page}
                                sx={{
                                    fontSize: 16,
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    marginX: 5,
                                    '&.MuiButtonBase-root:hover': {
                                        bgcolor: 'transparent',
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            marginRight: 5,
                            textTransform: 'capitalize',
                            backgroundColor: '#212b36',
                            fontWeight: 'bold',
                            '&.MuiButtonBase-root:hover': {
                                bgcolor: '#2d3945',
                            },
                        }}
                    >
                        Giriş Yap
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
