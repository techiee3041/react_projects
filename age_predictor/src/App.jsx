
import axios from "axios";
import { useState } from "react";
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  font-size: 2.5rem;
`

const Button = styled.button`
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  background: green;
`

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setAge(response.data);
    });
  };

  return (
    <Container>
      <input type="text" placeholder="e.g Victor..." onChange={changeName} />
      <Button onClick={fetchData}>Predict Age</Button>
      {age && (
        <p>
          Hello {age?.name}! You are {age?.age} years old.
        </p>
      )}
    </Container>
  );
};

export default App;