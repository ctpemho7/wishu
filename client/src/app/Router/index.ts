import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { RouteName } from "../../shared/confing/routes/routes";

const { LOGIN_PAGE, PROFILE_PAGE } = RouteName

export const router = createBrowserRouter([
    {
        path: LOGIN_PAGE,
        element: LoginPage()
    },
    {
        path: PROFILE_PAGE,
        element: ProfilePage()
    }
])