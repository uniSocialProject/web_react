//components
//import MainNav from './MainNav';
import MainNav from './newMainNav';
//packages
import { Outlet } from 'react-router';

const Layout = (props) => {
    return (
        <>
            <MainNav />
            <Outlet />
        </>
    );
};

export default Layout;
