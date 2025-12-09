import { useNavigate } from 'react-router-dom';
import { LogoStyle } from './Logo.style';

const Logo = () => {
  const nav = useNavigate();

  const onClick = () => {
    nav("/");
  }

  return (
    <LogoStyle onClick={onClick}>MyPick</LogoStyle>
  )
}

export default Logo