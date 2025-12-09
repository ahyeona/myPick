import { useTheme } from '../../context/ThemeContext';
import { CheckBox, ToggleContainer, ToggleSlider } from './ThemeToggle.style';

const ThemeToggle = () => {
  const { themeName, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <CheckBox
        type="checkbox"
        checked={themeName === "dark" || false}
        onChange={toggleTheme}
      />
      <ToggleSlider />
    </ToggleContainer>
  )
}


export default ThemeToggle