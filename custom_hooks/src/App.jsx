import { useCounter } from "./useCounter";

const App = () => {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>restart</button>
    </div>
  )
}

export default App