import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { RouteDescription, RouteName } from '../../shared/confing/routes/routes';

const { LOGIN_PAGE, PROFILE_PAGE } = RouteName

const routes: RouteDescription[] = [
    {
        path: LOGIN_PAGE,
        component: LoginPage
    },
    {
        path: PROFILE_PAGE,
        component: ProfilePage
    }
]


const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map((item) => <Route key={item.path} path={item.path} element={item.path} />)
            }
        </Routes>
    );
};

export default AppRouter;