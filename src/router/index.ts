import Chat from "../components/Chat";
import Login from "../components/Login";

export interface IRoute {
  path: string;
  element: React.ElementType;
}

export const enum RouteNames {
  LOGIN = "/login",
  CHAT = "/chat",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
];
export const privatRoutes: IRoute[] = [
  { path: RouteNames.CHAT, element: Chat },
];
