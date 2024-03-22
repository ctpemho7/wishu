import { ComponentType, PropsWithChildren } from "react";

export enum RouteName {
    MAIN_PAGE = '/main',
    LOGIN_PAGE = '/login',
    PROFILE_PAGE = '/profile',
    MY_GIFTS_LIST_PAGE = '/myGifts/:id',
    FRIEND_GIFTS_PAGE = '/friendGifts/:id',
    SEARCH_FRIEND_PAGE = '/searchFriend',
    MY_PRESENTS_LISTS_PAGE = '/myPresentLists',
    MY_PRESENT_LIST_PAGE = '/presentList/:id',
    FRIEND_PROFILE_PAGE = '/friendProfilePage/:id',
    FRIENDS_PAGE = '/friendsList'
}

export interface RouteDescription {
    path: RouteName;
    component: ComponentType;
    layout?: ComponentType<PropsWithChildren>;
}