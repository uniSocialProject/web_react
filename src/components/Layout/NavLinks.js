import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const navLinksSx = {
    mx: {
        md: 5,
        lg: 6,
        xl: 7,
    },
    '&.MuiButtonBase-root:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
    },
};

const NavigationLink = (props) => {
    return (
        <NavLink to={props.link}>
            <Button variant="text" sx={navLinksSx} disableRipple>
                {props.text}
            </Button>
        </NavLink>
    );
};

const NavLinks = () => {
    return (
        <>
            {/* {gets link and text props} */}
            <NavigationLink text={'item1'} />
            <NavigationLink text={'item2'} />
            <NavigationLink text={'item3'} />

            {/* {login button} */}
            <NavLink to="/login">
                <Button
                    variant="contained"
                    sx={{
                        mr: {
                            md: 1,
                            lg: 2,
                            xl: 3,
                        },
                        width: {
                            md: 160,
                            lg: 180,
                            xl: 200,
                        },
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
