import styled from "styled-components";
import Tour from "../Tour";

const Tours = ({ tours }) => {
  return (
    <Container>
      {tours.map((tour, i) => (
        <Tour key={i} tour={tour} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Tours;
