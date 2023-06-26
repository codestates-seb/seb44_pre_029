//QuestionList.js
// import profile from "../assets/Zzanggu.png";
import Item from "./Item";
import { Button } from "../pages/Signup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
export const QuestionsContainer = styled.section`
  width: 750px;
  padding: 16px;
`;
export const QuestionTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:last-child {
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
export const QuestionLi = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  div {
    display: flex;
    /* justify-content: center; */
  }
  @media (max-width: 800px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
const QuestionList = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const filterButton = ["Newest", "Hot"];
  console.log(data);
  //임시 데이터
  // const data = [
  //   {
  //     vote: 0,
  //     answer: 0,
  //     view: 0,
  //     questionTitle: "ㅁㄹㅇㅁㄴㄹㅁㄴㅇㄹㅁㅇㄴㄹㅁㅇㄴㄹㅁ",
  //     questionContent: "dfafsdafadsfsadfasdfadsfadsffasfaf",
  //     userImgUrl: profile,
  //     userName: "짱구",
  //     userReputation: 20,
  //   },
  //   {
  //     vote: 1,
  //     answer: 1,
  //     view: 1,
  //     questionTitle: "맹구",
  //     questionContent: "dfafsdafadsfsadfasdfadsfadsffasfaf",
  //     userImgUrl: profile,
  //     userName: "맹구",
  //     userReputation: 1,
  //     //   createAt: new Date(),
  //   },
  // ];
  //  전체 게시물 불러오기
  useEffect(() => {
    //page, size 설정
    axios.get("/questions?page=1&size=10").then((res) => console.log(res));
  }, []);

  //ask question 버튼 클릭 이벤트
  const navigate = useNavigate();
  const hanldeAskQuestion = () => {
    navigate("/questions/create");
  };

  return (
    <QuestionsContainer>
      <QuestionTitleDiv>
        <div className="header">
          <h3>All Questions</h3>
          {/* 버튼 링크 연결 -> 글 작성 페이지 */}
          <Button onClick={hanldeAskQuestion}>Ask Question</Button>
        </div>
        <div className="header_filter">
          <span>{data.length}&nbsp;questions</span>
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
      <QuestionLi>
        {data.map((e, idx) => {
          return <Item key={idx} item={e} />;
        })}
      </QuestionLi>
    </QuestionsContainer>
  );
};
export default QuestionList;
