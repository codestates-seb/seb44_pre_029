//YourAnswer.js
import styled from "styled-components";
import { Button } from "../pages/Signup";
export const YourAnswerTitle = styled.div``;
export const YourAnswerInputDiv = styled.div`
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #dfdfdf;
    padding: 10px;
    outline: none;
  }
`;
export const YourAnswerButton = styled.div`
  margin-top: 10px;
  button {
    width: fit-content;
  }
`;
const YourAnswer = () => {
  return (
    <>
      <YourAnswerTitle>
        <h2>Your Answer</h2>
      </YourAnswerTitle>
      <YourAnswerInputDiv>
        <textarea placeholder="답변 내용을 입력해주세요"></textarea>
      </YourAnswerInputDiv>
      <YourAnswerButton>
        <Button>Post Your Answer</Button>
      </YourAnswerButton>
    </>
  );
};

export default YourAnswer;
