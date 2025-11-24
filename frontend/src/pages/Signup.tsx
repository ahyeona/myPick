import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import { signupApi } from '../services/authApi';

const Signup = () => {
  // 비밀번호 확인
  // 이메일 형식 확인

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate(); 

  const gotoLogin = () => {
    nav("/login");
  }

  const signup = async () => {
    // ----------if 조건 수정필요---------
      if (!email || !password) alert("빈칸, 정규식 확인하세요.");
  
      try {
        const { data } = await signupApi({ email, password });
        console.log(data)
        alert("가입되었습니다.");
      } catch (error) {
        console.log(error)
        alert("오류입니다. 잠시 후 시도해주세요.");
      }
  }

  useEffect(()=>{
    console.log(email);
    console.log(password);
  }, [email, password])

  return (
    <div style={{"textAlign":"center"}}>
      <Input placeholder='Email' onChange={setEmail}/>
      <Input placeholder='Password' onChange={setPassword} />
      <Button text='회원가입' onClick={signup} />
      <Button text='로그인' onClick={gotoLogin} />
    </div>
  )
}

export default Signup