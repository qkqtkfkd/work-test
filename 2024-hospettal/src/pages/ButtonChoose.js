import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;

// HTML 태그의 속성들은 표준속성과 비표준속성으로 나눠진다.
// $○○○ ->비표준 속성으로 인식. 돔으로 보내지 않음. 충돌 방지.

function ButtonChoose() {
  return (
    <Container>
      <Button size="small" $round>
        현위치
      </Button>
      <Button size="small" $round>
        주소 선택
      </Button>
      <p></p>
      <Button size="small" $round>
        열람권 구매
      </Button>
    </Container>
  );
}

export default ButtonChoose;
