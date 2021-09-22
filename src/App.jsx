import {useState, useEffect} from 'react' 
import styled from "styled-components";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    } 
  }
  
  if (tours.length === 0) {
    return (
      <Container>
        <Title>No Tours Left</Title>
        <Button onClick={() => fetchTours()}>Refresh</Button>
      </Container>
    );
  }
  return (
    <Container>
      <Title>Tours</Title>
      <Tours tours={tours}></Tours>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Button = styled.button`

`
export default App;
