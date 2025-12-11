import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { emailRegex, passwordRegex } from "../../regex/auth";
import { AuthFormContainer, Error } from "./AuthForm.style";
import type { AuthProps } from "../../services/authApi";

interface AuthFormProps {
    mode: "login" | "signup";
    onSubmit: (data: AuthProps) => void;
}

const AuthForm = ({ mode, onSubmit }: AuthFormProps) => {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        passwordCheck: "",
    });

    const validate = () => {
        let temp = { email: "", password: "", passwordCheck: "" };
        let isValid = true;

        if (!emailRegex.test(email)) {
            temp.email = "올바른 이메일 형식이 아닙니다.";
            isValid = false;
        }

        if (!passwordRegex.test(password)) {
            temp.password =
                "비밀번호는 8자리 이상, 영문/숫자/특수문자를 모두 포함해야 합니다.";
            isValid = false;
        }

        if (mode === "signup") {
            if (password !== passwordCheck) {
                temp.passwordCheck = "비밀번호가 일치하지 않습니다.";
                isValid = false;
            }
        }

        setErrors(temp);
        return isValid;
    };

    const gotoPage = () => {
        const pageName = mode === "signup" ? "login" : "signup";
        nav(`/${pageName}`);
    }

    const onClick = () => {
        if (mode === "signup" && !validate()) return;

        onSubmit({ email, password });
    }

    return (
        <AuthFormContainer>
            <Input placeholder='이메일' onChange={setEmail} />
            {mode === "signup" && errors.email && <Error>{errors.email}</Error>}

            <Input password={true} placeholder='비밀번호' onChange={setPassword} />
            {mode === "signup" && errors.password && <Error>{errors.password}</Error>}

            {
                mode === "signup" && (
                    <>
                        <Input password={true} placeholder='비밀번호 확인' onChange={setPasswordCheck} />
                        {errors.passwordCheck && <Error>{errors.passwordCheck}</Error>}
                    </>
                )
            }
            <Button text={mode === "signup" ? "회원가입" : "로그인"} onClick={onClick} />
            <Button text={mode === "signup" ? "로그인 페이지로" : "회원가입 페이지로"} onClick={gotoPage} />
        </AuthFormContainer>
    )
}

export default AuthForm