import React from "react";
import { Home } from "../components/pages/home/Home";
import { Setting } from "../components/pages/home/Setting";
import { UserManagement } from "../components/pages/home/UserManagement";

export const homeRoutes=[
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/home/setting",
        element: <Setting />,
    },
    {
        path: "/home/user_management",
        element: <UserManagement />,
    },
]