//components
import Layout from './components/Layout/Layout';
//pages
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
//packages
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'login', element: <AuthPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
