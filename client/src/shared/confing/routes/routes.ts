import { ComponentType, PropsWithChildren } from "react";

export enum RouteName {
    MAIN_PAGE = '/main',
    LOGIN_PAGE = '/login',
    PROFILE_PAGE = '/profile',
    GIFTS_PAGE = '/gifts',
    FRIENDS_LIST_PAGE = '/friendsList',
    SEARCH_FRIEND_PAGE = '/searchFriend',
    MY_PRESENTS_LISTS_PAGE = '/myPresenetsLists',
    MY_PRESENT_LIST_PAGE = '/presentList',

}

export interface RouteDescription {
    path: RouteName;
    component: ComponentType;
    layout?: ComponentType<PropsWithChildren>;
}