import styled from "styled-components";
import Tour from "../Tour";
import {mobile} from '../../responsive'

const Tours = ({ tours, removeTour }) => {
  return (
    <Container>
      {tours.map((tour, i) => (
        <Tour key={i} tour={tour} removeTour={removeTour} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 475px;

  ${mobile({
  width: "90vw",
  })}
`;

export default Tours;
