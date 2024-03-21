import { ReactElement } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import FriendGiftsListPage from '../../pages/FriendGiftsListPage/components/FriendGiftsListPage';
import FriendProfilePage from '../../pages/FriendProfilePage/components/FriendProfilePage';
import FriendsListPage from '../../pages/FriendsListPage/components/FriendsListPage';
import { LoginPage } from '../../pages/LoginPage';
import { MainPage } from '../../pages/MainPage';
import MyGiftsPage from '../../pages/MyGiftsPage/components/GiftsComponents';
import MyPresentListsPage from '../../pages/MyPresentListsPage/components/PresentsListsPage';
import PresentListPage from '../../pages/PresentListPage/components/PresentListPage';
import { ProfilePage } from '../../pages/ProfilePage';
import SearchFriendPage from '../../pages/SearchFriendPage/components/SearchFriendPage';
import { RouteName } from '../../shared/confing/routes/routes';
import TopMenu from '../../widgets/TopMenu/components/TopMenu';
import { useTypedSelector } from '../store';

const {
    LOGIN_PAGE,
    PROFILE_PAGE,
    MAIN_PAGE,
    MY_GIFTS_LIST_PAGE,
    FRIEND_GIFTS_PAGE,
    SEARCH_FRIEND_PAGE,
    MY_PRESENTS_LISTS_PAGE,
    MY_PRESENT_LIST_PAGE,
    FRIEND_PROFILE_PAGE,
    FRIENDS_PAGE
} = RouteName


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
                    path: MY_GIFTS_LIST_PAGE,
                    element: (
                        <GuestGuard>
                            <MyGiftsPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: FRIEND_GIFTS_PAGE,
                    element: (
                        <GuestGuard>
                            <FriendGiftsListPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: SEARCH_FRIEND_PAGE,
                    element: (
                        <GuestGuard>
                            <SearchFriendPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: MY_PRESENTS_LISTS_PAGE,
                    element: (
                        <GuestGuard>
                            <MyPresentListsPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: MY_PRESENT_LIST_PAGE,
                    element: (
                        <GuestGuard>
                            <PresentListPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: FRIEND_PROFILE_PAGE,
                    element: (
                        <GuestGuard>
                            <FriendProfilePage />
                        </GuestGuard>
                    ),
                },
                {
                    path: FRIENDS_PAGE,
                    element: (
                        <GuestGuard>
                            <FriendsListPage />
                        </GuestGuard>
                    ),
                },
            ],
        },
    ])