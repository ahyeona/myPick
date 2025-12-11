import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../../components'
import { loginApi, type AuthProps } from '../../services/authApi';
import { useAuthStore } from '../../store/authStore';

const Login = () => {
  const { setAuth } = useAuthStore();

  const nav = useNavigate();

  const loginHandler = async (props: AuthProps) => {
    try {
      const { data } = await loginApi(props);
      setAuth(data.user, data.accessToken);
      nav("/");
    } catch (error: any) {
      alert("로그인 실패");
    }
  }

  return (
    <AuthForm mode='login' onSubmit={loginHandler} />
  )
  // const { setAuth } = useAuthStore();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const nav = useNavigate();

  // const login = async () => {
  //   // ----------if 조건 수정필요---------
  //   if (!email || !password) alert("빈칸, 정규식 확인하세요.");

  //   try {
  //     const { data } = await loginApi({ email, password });
  //     setAuth(data.user, data.accessToken);
  //     nav("/");
  //   } catch (error: any) {
  //     alert("로그인 실패");
  //   }
  // }

  // const gotoSignup = () => {
  //   nav("/signup");
  // }

  // return (
  //   <div style={{ "textAlign": "center" }}>
  //     <Input placeholder='Email' onChange={setEmail} />
  //     <Input password={true} placeholder='Password' onChange={setPassword} />
  //     <Button text='로그인' onClick={login} />
  //     <Button text='회원가입' onClick={gotoSignup} />
  //   </div>
  // )
}

export default Login