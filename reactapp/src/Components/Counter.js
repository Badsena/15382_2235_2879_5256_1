import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev * 10);
  };

  const handleDecrease = () => {
    setCount(prev => prev / 10);
  };

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={handleIncrease} style={styles.button}>Increase</button>
        {/* <button onClick={handleDecrease} style={styles.button}>Decrease</button> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default Counter;