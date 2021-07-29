import Login from "./pages/Login"
import Registration from "./pages/Registration"
import MainPage from "./pages/MainPage"
import PublicSheets from "./pages/PublicSheets"
import SheetsPage from "./pages/SheetsPage"
import UserSheets from "./pages/UserSheets"
import { LOGIN_ROUTE, MAINPAGE_ROUTE, PUBLICSHEETS_ROUTE, REGISTRATION_ROUTE, SHEETSPAGE_ROUTE, USERSHEETS_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: USERSHEETS_ROUTE,
        Component: UserSheets
    }
]

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage
    }
    ,
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
    ,
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    }
    ,
    {
        path: SHEETSPAGE_ROUTE,
        Component: SheetsPage
    }
    ,
    {
        path: PUBLICSHEETS_ROUTE,
        Component: PublicSheets
    }
    ,
]