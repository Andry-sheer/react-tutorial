import { useState, useEffect } from 'react';

const Count = ()=> {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('call...')

    return () => {
      console.log('UnMount->call...')
    };
  }, [count]);

  return (
    <div>
      <p>Вы нажали <span style={{color:'yellow'}}>{count}</span>  раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

export default Count;