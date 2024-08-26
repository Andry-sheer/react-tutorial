
import { useState } from "react"

<<<<<<< HEAD
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // this.handleClick = this.handleClick.bind(this);
=======
const Toggle = () => {
  const [ isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);
>>>>>>> d4ecc1e84e862a702e8b79691ad8862262369675
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}


export default Toggle;