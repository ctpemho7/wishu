import { ReactElement } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { MainPage } from '../../pages/MainPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { RouteName } from '../../shared/confing/routes/routes';
import { GiftList } from '../../widgets/GiftList';
import TopMenu from '../../widgets/TopMenu/components/TopMenu';
import { useTypedSelector } from '../store';

const { LOGIN_PAGE, PROFILE_PAGE, MAIN_PAGE, GIFTS_PAAGE } = RouteName


type GuestGuardProps = {
    children: ReactElement
}

function GuestGuard({ children }: GuestGuardProps) {
    const isAuthorized = useTypedSelector(state => state.auth.isAuthenticated)

    if (!isAuthorized) return <Navigate to="/login" />

    return <><TopMenu />{children}</>
}

type AuthGuardProps = {
    children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
    const isAuthorized = useTypedSelector(state => state.auth.isAuthenticated)

    if (isAuthorized) return <Navigate to="/main" />

    return children
}

export const appRouter = () =>
    createBrowserRouter([
        {
            errorElement: <div>error</div>,
            // loader: async () => {
            //     return await featureToggleLoader(appStore.dispatch)
            // },
            children: [
                {
                    path: LOGIN_PAGE,
                    element: (
                        <AuthGuard>
                            <LoginPage />
                        </AuthGuard>
                    ),
                },
                {
                    path: MAIN_PAGE,
                    element: (
                        <GuestGuard>
                            <MainPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: PROFILE_PAGE,
                    element: (
                        <GuestGuard>
                            <ProfilePage />
                        </GuestGuard>
                    ),
                },
                {
                    path: GIFTS_PAAGE,
                    element: (
                        <GuestGuard>
                            <GiftList />
                        </GuestGuard>
                    ),
                },
            ],
        },
        // {
        //     element: layoutWithSidebar,
        //     errorElement: <div>error</div>,
        //     loader: async () => {
        //         return await featureToggleLoader(appStore.dispatch)
        //     },
        //     children: [
        //         {
        //             path: '/',
        //             element: <MainPage />,
        //         },
        //     ],
        // },
    ])