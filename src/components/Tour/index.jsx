import styled from "styled-components";

const Tour = () => {
  return (
    <Container>
      <Image></Image>
      <Info>
        <Name></Name>
        <Price></Price>
      </Info>
      <Description></Description>
      <Button></Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img``;

const Info = styled.div``;

const Name = styled.h3``;

const Price = styled.h3``;

const Description = styled.p``;

const Button = styled.button``;

export default Tour;
