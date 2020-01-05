import React, { useState } from "react";

const UseStateUseCase = () => {
  const [count, setCount] = useState(() => 0);
  const [{ soap, detergent }, setGrossory] = useState({
    soap: 0,
    detergent: 0
  });
  // const { soap, detergent } = grossory;
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      count {count}
      <button
        onClick={() =>
          setGrossory(grossory => ({
            ...grossory,
            soap: grossory.soap + 1,
            detergent: grossory.soap + 1
          }))
        }
      >
        increment grossory
      </button>
      count {soap}
      count {detergent}
    </div>
  );
};

export default UseStateUseCase;
