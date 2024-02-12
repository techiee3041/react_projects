import { useState } from "react";

export const useCounter = (initialval=0) => {
    const [count, setCount] = useState(initialval);

    const add = () => setCount(count + 1);
    const subtract = () => setCount(count - 1);
    const reset = () => setCount(0);

    return [count, add, subtract, reset];
}