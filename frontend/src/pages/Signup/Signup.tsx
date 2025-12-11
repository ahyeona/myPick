import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components';
import { signupApi, type AuthProps } from '../../services/authApi';

const Signup = () => {
  const nav = useNavigate();

  const signupHandler = async (props: AuthProps) => {
    try {
      const { data } = await signupApi(props);
      console.log("signup 응답", data)
      alert("가입되었습니다.");
      nav("/login");
    } catch (error: any) {
      console.log(error)
      alert(error.response.data.message);
    }
  }

  return (
    <AuthForm mode='signup' onSubmit={signupHandler} />
  )


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");

  // const nav = useNavigate();

  // const gotoLogin = () => {
  //   nav("/login");
  // }

  // const signup = async () => {
  //   // ----------if 조건 수정필요---------
  //   if (!email || !password) {
  //     alert("빈칸, 정규식 확인하세요.");
  //     return;
  //   }

  //   if (password !== passwordCheck) {
  //     alert("비밀번호가 일치하지 않습니다.");
  //     return;
  //   }

  //   try {
  //     const { data } = await signupApi({ email, password });
  //     console.log("signup 응답", data)
  //     alert("가입되었습니다.");
  //   } catch (error: any) {
  //     console.log(error)
  //     alert(error.response.data.message);
  //   }
  // }

  // return (
  //   <div style={{ "textAlign": "center" }}>
  //     <Input placeholder='이메일' onChange={setEmail} />
  //     <Input password={true} placeholder='비밀번호' onChange={setPassword} />
  //     <Input password={true} placeholder='비밀번호 확인' onChange={setPasswordCheck} />
  //     <Button text='회원가입' onClick={signup} />
  //     <Button text='로그인' onClick={gotoLogin} />
  //   </div>
  // )








}

export default Signup