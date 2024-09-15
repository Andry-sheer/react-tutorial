import "./Counter.css";
import { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialState = { count: "" }

const reducer = (action, state) => {
  switch(action.type) {
    case 'YES':
      return { count: state.count = 'YES' }
    case 'NO':
      return { count: state.count = 'NO' }
    default:
      return state;
  }
}


const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
      <div className="Container">
        <h1 className="Title">press Yes Or No</h1>
        <p>count: {state.count}</p>
        <div className="ButtonsCont">
          <Button onClick={()=> dispatch({ type: "YES" })} variant="primary">YES</Button>
          <Button onClick={()=> dispatch({ type: "NO" })} variant="primary">NO</Button>
        </div>
      </div> 
  )
}

export default Counter;