import styled from "styled-components";
import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Container>
      <ImageWrapper>
        <Image src={tour.image}></Image>
      </ImageWrapper>
      <Wrapper>
        <Name>{tour.name}</Name>
        <Price>${tour.price}</Price>
      </Wrapper>
      <Info>
        {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <ReadMore onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </ReadMore>
      </Info>
      <Button onClick={() => removeTour(tour.id)}>Not Interested</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 316px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Name = styled.h3``;

const Price = styled.h3`
  color: #38bde9;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Info = styled.p`
  width: 92%;
  margin: 0;
  font-size: 18px;
`;

const ReadMore = styled.button`
  border: none;
  background: transparent;
  font-size: 10px;
  color: #38bde9;
  cursor: pointer;
`;

const Button = styled.button`
  margin: 25px 0 25px 0;
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

export default Tour;
