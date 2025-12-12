import { Request, Response } from "express";
import { loginService, profileService, refreshAccessToken, signupService } from "../services/authService";
import { RequestWithUser } from "../types/express";
import { Token } from "../models";

export const signupController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await signupService(email, password);
        return res.status(200).json({ message: "회원가입 성공", user });
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const data = await loginService(email, password);
        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });
        return res.status(200).json({ message: "로그인 성공", user: data.user, accessToken: data.accessToken });
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const refreshController = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.cookies;
        const accessToken = await refreshAccessToken(refreshToken);

        return res.status(200).json({ message: "accessToken 발급", accessToken });
    } catch (error: any) {
        return res.status(400).json({ message: "로그인하세요." })
    }
}

export const profileController = async (req: RequestWithUser, res: Response) => {
    const user_id = req.user;
    if (!user_id) {
        return res.status(400).json({ message: "로그인하세요." })
    }

    try {
        const user = await profileService(user_id);
        return res.status(200).json({ message: "user profile", user });
    } catch (error: any) {
        return res.status(400).json({ message: "로그인하세요." })
    }
}


export const logoutController = async (req: RequestWithUser, res: Response) => {
    try {
        const { refreshToken } = req.cookies;

        if (refreshToken) {
            await Token.destroy({ where: { refresh_token: refreshToken } });
        }

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });

        return res.status(200).json({ message: "로그아웃 성공" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "로그아웃 실패" });
    }
}