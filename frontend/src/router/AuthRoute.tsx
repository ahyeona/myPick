import type { JSX } from "react";
import { Login } from "../pages";
import { useAuthStore } from "../store/authStore"


const AuthRoute = ({ children }: { children: JSX.Element }) => {
    const user = useAuthStore.getState().user;

    return (
        user ? children : <Login />
    )
}

export default AuthRoute