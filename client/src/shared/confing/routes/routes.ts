import { ComponentType, PropsWithChildren } from "react";

export enum RouteName {
    MAIN_PAGE = '/main',
    LOGIN_PAGE = '/login',
    PROFILE_PAGE = '/profile'
}

export interface RouteDescription {
    path: RouteName;
    component: ComponentType;
    layout?: ComponentType<PropsWithChildren>;
}