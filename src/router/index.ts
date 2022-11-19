import React from "react";
import Login from "../pages/Login";
import Event from '../pages/Event';
import DayDescription from "../pages/DayDescription";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    DAYDESCRIPTION='/daydescription/:date',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event},
    {path: RouteNames.DAYDESCRIPTION, exact: true, component: DayDescription},
]
