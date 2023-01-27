import { Button } from '@mui/material';
import React,{useReducer} from 'react';
import './App.css';


function App() {
  const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <Button  onClick={() => dispatch({type: 'decrement'})}>-</Button>
      <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
    </div>
  );
<App/>
  
}

export default App;
