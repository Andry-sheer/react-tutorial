
import { useState } from "react"

const Toggle = () => {
  const [ isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}


export default Toggle;