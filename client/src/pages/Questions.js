//Questions.js
import profile from "../assets/Zzanggu.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../pages/Signup";
import styled from "styled-components";
import Aside from "../components/Aside";
import Vote from "../components/Vote";
import Answer from "../components/Answer";
// import Comment from "../components/Comment";
import YourAnswer from "../components/YourAnswer";
export const QuestionsSection = styled.section`
  padding: 30px;
  max-width: 1000px;
  color: #6a737c;
`;
export const QuestionTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    > h1 {
      font-size: 1.8em;
      font-weight: 500;
      margin-bottom: 10px;
      /* line-height: 2em; */
      color: #3b4044;
      margin: 0;
      margin-bottom: 8px;
    }
    > button {
      /* width: fit-content; */
      width: 200px;
      height: fit-content;
      margin-left: 12px;
    }
  }
  .header_info {
    > span {
      font-size: 13px;
      font-weight: 400;
      color: #6a737c;
      margin-right: 20px;
      padding-bottom: 8px;
      margin-bottom: 16px;
      > strong {
        font-weight: 500;
        color: #313336;
      }
    }
  }
`;
export const QuestionContent = styled.div`
  display: flex;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
  /* padding: 20px; */
  > div:first-child {
    display: flex;
    justify-content: space-evenly;

    padding: 20px;
  }
`;
export const SubContent = styled.div`
  color: #333537;
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  button {
    margin: 2px;
    border: none;
    background-color: transparent;

    color: #ccc;
  }
  .subContent {
    display: flex;
    justify-content: space-between;

    margin: 16px 0;
  }
  .subButton button {
    font-size: 11px;
    color: #6a737c;
    cursor: pointer;
    &:hover {
      color: #666;
    }
  }
  .user {
    box-sizing: border-box;
    border-radius: 3px;
    width: 150px;
    background-color: #d9eaf7;
    padding: 5px 6px 7px 7px;
    display: flex;
    flex-direction: column;
    > span {
      font-size: 12px;
    }
    > span:first-child {
      margin-bottom: 4px;
    }
    > span:nth-child(2) {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        border-radius: 5px;
      }
      div {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        span:first-child {
          color: #0074cc;
          cursor: pointer;
        }
        span:last-child {
          font-weight: 600;
        }
      }
    }
  }
`;
export const AsideContainer = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Questions = () => {
  //임시 데이터
  // const [data, setData] = useState({});
  const [vote, setVote] = useState(0);
  const [questionData, setQeustionData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [answerData, setAnswerData] = useState([]);

  const currentUserId = localStorage.getItem("userId");
  const { questionId } = useParams();
  console.log(questionId);
  //해당 id로 게시물 조회
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const URL = `${PROXY}/questions/${questionId}`;
  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
          Authorization: localStorage.getItem("Authorization"), //post 요청시 인증토큰 필요
        },
      })
      .then((res) => {
        console.log(res);

        // setData(res.data);

        setQeustionData(res.data.question);
        setUserData(res.data.user);
        setAnswerData(res.data.answer);
        setVote(questionData.like);
        // console.log(questionData.vote.score);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  }, []);
  // console.log(data);
  // console.log(questionData);
  // console.log(userData);
  // console.log(answerData);

  const navigate = useNavigate();
  //질문 버튼 클릭 이벤트
  const handleAskQuestion = () => {
    navigate("/questions/create");
  };
  const handleDataEdit = () => {
    navigate(`/question/edit/${questionId}`);
    // navigate("/question/edit/6");
    //end point 가 이상하므로 수정 필요!
  };

  return (
    <QuestionsSection>
      <QuestionTitle>
        <div className="header">
          <h1>{questionData.title}</h1>
          {/* 버튼 링크 연결 -> 글 작성 페이지 */}
          <Button onClick={handleAskQuestion}>Ask Question</Button>
        </div>
        <div className="header_info">
          <span>
            Asked
            <strong>&nbsp;today</strong>
          </span>
          <span>
            Modifed
            <strong>&nbsp;today</strong>
          </span>
          <span>
            Viewed
            <strong>&nbsp;7 times</strong>
          </span>
        </div>
      </QuestionTitle>

      <QuestionContent>
        {/* 질문 본문  + Aside -> flex */}

        {/* Vote ,  */}
        <ContentContainer>
          {/* <본문 질문> <answer> <YourAnswer> -> flex: column*/}
          <div className="box">
            <Vote vote={vote} questionId={questionId} />

            {/* Sub -> Content -> Comment  */}
            <SubContent>
              <div>{questionData.body}</div>

              <div className="subContent">
                {/* 왼쪽 */}
                <div>
                  {/* 자기가 작성한 글일 경우, Share Edit Delete 
                    아닌 경우, Share Follow */}
                  {Number(currentUserId) === userData.user_id ? (
                    <div className="subButton">
                      <button>Share</button>
                      {/* Edit 편집 페이지로 이동 Link 추가 */}
                      <button onClick={handleDataEdit}>Edit</button>
                      {/* Delete 메인 페이지로 이동 Link 추가 , 서버에서 삭제*/}
                      <button>Delete</button>
                    </div>
                  ) : (
                    <div className="subButton">
                      <button>Share</button>
                      <button>Follow</button>
                    </div>
                  )}
                </div>

                {/* 오른쪽 */}

                <div>
                  <div className="user">
                    <span>asked hours ago</span>
                    <span>
                      <img src={profile} alt={profile} />
                      <div>
                        <span>{userData.display_name || "짱구"}</span>
                        {/* <span>{data.userReputation}</span> */}
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              {/* Add a comment */}

              {/* <Comment /> */}
            </SubContent>
          </div>

          {/* Answer */}
          <div>
            <Answer answerData={answerData} />
          </div>

          {/* Your Answer */}
          <div>
            {/* Answer 컴포넌트로 분리*/}
            <YourAnswer questionId={questionId} />
          </div>
        </ContentContainer>

        {/* 본문 안 aside */}
        <AsideContainer>
          <Aside />
        </AsideContainer>
      </QuestionContent>
    </QuestionsSection>
  );
};

export default Questions;
