import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;


function ButtonChoose() {
  return (
    <Container>
      <Button size="small" $round>
        현위치
      </Button>
      <Button size="small" $round>
        주소 선택
      </Button>

      <span></span>

    </Container>
  );
}

export default ButtonChoose;
