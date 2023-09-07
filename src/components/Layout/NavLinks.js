import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavLinks = () => {
    return (
        <>
            <NavLink>
                <Button
                    variant="text"
                    sx={{
                        mx: 5,
                        '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                        },
                    }}
                    disableRipple
                >
                    test1
                </Button>
            </NavLink>

            <NavLink>
                <Button
                    variant="text"
                    sx={{
                        mx: 5,
                        '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                        },
                    }}
                    disableRipple
                >
                    test2
                </Button>
            </NavLink>

            <NavLink>
                <Button
                    variant="text"
                    sx={{
                        mx: 5,
                        '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                        },
                    }}
                    disableRipple
                >
                    test3
                </Button>
            </NavLink>
            <NavLink to="/login">
                <Button
                    variant="contained"
                    sx={{
                        mr: 2,
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        '&.MuiButtonBase-root:hover': {},
                    }}
                >
                    Giriş Yap
                </Button>
            </NavLink>
        </>
    );
};
export default NavLinks;
