import { Button } from "../pages/Signup";
import { useState } from "react";
import styled from "styled-components";
export const QuestionsContainer = styled.section`
  max-width: 750px;
  padding: 16px;
`;
export const QuestionTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  > .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h3 {
      margin: 0;
      font-weight: 400;
      font-size: 1.7rem;
      margin-bottom: 22px;
    }
    button {
      width: fit-content;
    }
  }
  > .header_filter {
    div:first-child {
      display: flex;
      margin-bottom: 16px;
      height: 35px;
      justify-content: flex-end;
      button {
        padding: 0.5em;
        color: #6b6f73;
        background: rgb(255, 255, 255);
        border: 1px solid #989fa6;
        cursor: pointer;
        &:hover {
          background: #f5f5f5;
        }
      }
      button:first-child {
        border-radius: 3px 0 0 3px;
        border-right: none;
      }
      button:last-child {
        border-radius: 0 3px 3px 0;
      }
      .focused {
        background-color: #e3e6e8;
        color: #000;
        &:hover {
          background-color: #e3e6e8;
        }
      }
    }
  }
`;

const QuestionList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const filterButton = ["Newest", "Hot"];
  return (
    <QuestionsContainer>
      <QuestionTitleDiv>
        <div className="header">
          <h3>Top Questions</h3>
          {/* 버튼 링크 연결 -> 글 작성 페이지 */}
          <Button>Ask Question</Button>
        </div>
        <div className="header_filter">
          <div className="filter_button">
            {filterButton.map((el, idx) => (
              <button
                key={idx}
                className={idx === tabIndex ? "focused" : null}
                onClick={() => {
                  setTabIndex(idx);
                }}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </QuestionTitleDiv>
    </QuestionsContainer>
  );
};
export default QuestionList;
