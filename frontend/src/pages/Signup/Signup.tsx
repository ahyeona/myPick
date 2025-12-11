import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components';
import { signupApi, type AuthProps } from '../../services/authApi';
import { LoginContainer } from '../Login/Login.style';

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
    <LoginContainer>
      <AuthForm mode='signup' onSubmit={signupHandler} />
    </LoginContainer>
  )

}

export default Signup