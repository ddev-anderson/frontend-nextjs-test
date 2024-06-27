import { useState, useEffect } from "react";

type CounterProps = {
  initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const handleMount = () => {
      const event = new CustomEvent("onCounterMount");
      window.dispatchEvent(event);
    };

    handleMount();

    return () => {
      const event = new CustomEvent("onCounterUnmount");
      window.dispatchEvent(event);
    };
  }, []);

  useEffect(() => {
    if (count === 10) {
      const event = new CustomEvent("onCounterUnmount");
      window.dispatchEvent(event);
    } else {
      // Disparar evento de atualização com o novo valor
      const updateEvent = new CustomEvent("onCounterUpdate", {
        detail: { count },
      });
      window.dispatchEvent(updateEvent);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {count < 10 && (
        <>
          <h2>Contador: {count}</h2>
          <button onClick={handleIncrement}>Incrementar +</button>
        </>
      )}
    </div>
  );
};
