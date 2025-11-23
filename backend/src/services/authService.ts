import User from "../models/User"
import bcrypt from "bcrypt"
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/token";
import Token from "../models/Token";

export const signupService = async (email : string, password : string) => {
    const exist = await User.findOne({ where : { email } });
    if (exist) throw new Error("이미 존재하는 이메일입니다.");

    const hashedPw = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password : hashedPw });

    return user;
}

export const loginService = async (email: string, password : string) => {
    const user = await User.findOne({ where : { email } });
    if (!user) throw new Error("없는 사용자입니다.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("비밀번호가 일치하지 않습니다.");

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    await Token.upsert({ user_id: user.id, refresh_token: refreshToken });

    return { user, accessToken, refreshToken };
}

export const refreshAccessToken = async (refreshToken: string) => {
  const decoded = verifyRefreshToken(refreshToken);
  const user_id = decoded.id;

  const token = await Token.findOne({ where: { user_id } });
  if (!token || token.refresh_token !== refreshToken)
    throw new Error("Refresh Token이 유효하지 않습니다.");

  const newAccessToken = generateAccessToken(user_id);
  return newAccessToken;
};