//components
import Layout from './layouts/Layout';
//pages
import { ErrorPage, RegisterPage, LoginPage, HomePage } from './pages';
//packages
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const customTheme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    breakpoints: {
        values: {
            xs: 0,
            vs: 250,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            vl: 1800,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'login-test', element: <LoginPage /> },
            { path: 'register-test', element: <RegisterPage /> },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
