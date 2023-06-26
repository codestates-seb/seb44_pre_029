//YourAnswer.js
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../pages/Signup";
import axios from "axios";
export const YourAnswerTitle = styled.div`
  color: #27292c;
  font-size: 13px;
  > h2 {
    margin-top: 30px;
  }
`;
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
export const YourAnswerTipContainer = styled.div`
  margin: 10px 0px 20px;
  padding: 20px;
  color: #232629;
  text-align: left;
  line-height: 180%;
  border: 1px solid #e6ce79;
  background-color: #fdf8e3;
  border-radius: 5px;
  height: fit-content;
  font-size: 14px;

  > * {
    margin: 0;
  }
  > p:last-child {
    a {
      color: #005ca3;
      text-decoration: none;
      &:hover {
        color: #1897fb;
      }
    }
  }
`;
const YourAnswer = ({ questionId }) => {
  const [onTip, setOnTip] = useState(false);
  const [yourAnswer, setyourAnswer] = useState("");

  const handlePostYourAnswer = () => {
    const YourAnswer = {
      checklike: 1,
    };
    axios
      .post(
        `/questions/${questionId}/like`,
        YourAnswer,

        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": true,
            Authorization: localStorage.getItem("Authorization"),
          },
        },
      )
      .then((res) => console.log(res));
  };
  const handleText = (e) => {
    setyourAnswer(e.target.value);
  };
  console.log(yourAnswer);
  return (
    <>
      <YourAnswerTitle>
        <h2>Your Answer</h2>
      </YourAnswerTitle>
      <YourAnswerInputDiv onClick={() => setOnTip(!onTip)}>
        <textarea
          value={yourAnswer}
          onChange={handleText}
          placeholder="답변 내용을 입력해주세요"
        ></textarea>
      </YourAnswerInputDiv>
      {onTip && (
        <YourAnswerTipContainer>
          <p>Thanks for contributing an answer to Stack Overflow!</p>
          <ul>
            <li>
              Please be sure toanswer the question. Provide details and share
              your research!
            </li>
          </ul>
          <p>But avoid...</p>
          <ul>
            <li>
              Asking for help, clarification, or responding to other answers.
            </li>
            <li>
              Making statements based on opinion; back them up with references
              or personal experience.
            </li>
          </ul>
          <p>
            <a href="https://stackoverflow.com/help/how-to-answer">
              To learn more, see our tips on writing great answers.
            </a>
          </p>
        </YourAnswerTipContainer>
      )}
      <YourAnswerButton onClick={handlePostYourAnswer}>
        <Button>Post Your Answer</Button>
      </YourAnswerButton>
    </>
  );
};

export default YourAnswer;
