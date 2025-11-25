import { Request, Response } from "express";
import { loginService, profileService, refreshAccessToken, signupService } from "../services/authService";
import { RequestWithUser } from "../types/express";

export const signupController = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const user = await signupService(email, password);
        res.status(200).json({ message: "회원가입 성공", user });
    } catch (error : any) {
        res.status(400).json({ message: error.message });
    }
}

export const loginController = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const data = await loginService(email, password);
        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            secure: false,    // https 환경에서만 전송
            sameSite: "strict",
            path: "/",
        });
        res.status(200).json({ message: "로그인 성공", user : data.user, accessToken : data.accessToken });
    } catch (error : any) {
        res.status(400).json({ message: error.message });
    }
}

export const refreshController = async (req : Request, res : Response) => {
    try {
        console.log("refreshController", refreshController);
        const { refreshToken } = req.cookies;
        console.log("refreshToken", refreshToken);
        const accessToken = await refreshAccessToken(refreshToken);
        res.status(200).json({ message: "accessToken 발급", accessToken });
    } catch (error : any) {
        res.status(400).json({ message : "로그인하세요." })
    }
}

export const profileController = async (req : RequestWithUser, res : Response) => {
    const user_id = req.user;
    if (!user_id) {
        return res.status(400).json({ message : "로그인하세요." })
    }
    
    try {
        const user = await profileService(user_id);
        return res.status(200).json({ message: "user profile", user });
    } catch (error : any) {
        return res.status(400).json({ message : "로그인하세요." })
    }
}
