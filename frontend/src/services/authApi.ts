import { baseAxios } from "../axios";

interface authProps {
    email: string;
    password: string;
}

export const loginApi = (data: authProps) => baseAxios.post("/auth/login", data);
export const signupApi = (data: authProps) => baseAxios.post("/auth/signup", data);