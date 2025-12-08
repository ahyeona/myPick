import { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { RequestWithUser } from "../types/express";

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
        const header = req.headers.authorization;

        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({ message: "로그인이 필요합니다." });
        }

        const token = header.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY as string) as { id: number };
            req.user = decoded.id;
            console.log("authmiddleware", decoded.id);
            next();
        } catch (error) {
            return res.status(403).json({ message: "로그인 정보가 만료되었습니다. 새로고침하십시오." });
        }

    } catch (error) {
        return res.status(403).json({ message: "로그인 정보가 만료되었습니다. 새로고침하십시오." });
    }

}