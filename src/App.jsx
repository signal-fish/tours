import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
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
      <Tours tours={tours} removeTour={removeTour}></Tours>
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
  padding: 5px 40px;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    opacity: 0.6;
  }
`;
export default App;
