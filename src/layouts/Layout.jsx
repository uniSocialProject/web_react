//components
import MainNav from './MainNav';
//packages
import { Outlet } from 'react-router';

const Layout = (props) => {
    return (
        <>
            {/* <MainNav /> */}
            <Outlet />
        </>
    );
};

export default Layout;
