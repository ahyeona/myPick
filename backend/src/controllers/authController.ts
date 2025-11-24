import { Request, Response } from "express";
import { loginService, refreshAccessToken, signupService } from "../services/authService";

export const signupController = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const user = await signupService(email, password);
        res.status(200).json({ message: "회원가입 성공", user });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const loginController = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const data = await loginService(email, password);
        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            // secure: true,    // https 환경에서만 전송
            sameSite: "strict",
            path: "/",
        });
        res.status(200).json({ message: "로그인 성공", user : data.user, accessToken : data.accessToken });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const refreshController = async (req : Request, res : Response) => {
    try {
        const { refreshToken } = req.body;
        const accessToken = await refreshAccessToken(refreshToken);
        res.status(200).json({ message: "accessToken 발급", accessToken });
    } catch (error) {
        res.status(400).json({ message : error })
    }
}