//Questions.js
import profile from "../assets/Zzanggu.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../pages/Signup";
import styled from "styled-components";
import Aside from "../components/Aside";
import Vote from "../components/Vote";
import Answer from "../components/Answer";
import Comment from "../components/Comment";
import YourAnswer from "../components/YourAnswer";
export const QuestionsSection = styled.section`
  padding: 30px;
  width: 800px;
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
      width: fit-content;
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

  > div:first-child {
    display: flex;
    justify-content: space-evenly;
  }
`;
export const SubContent = styled.div`
  color: #333537;
  /* display: flex;
  flex-direction: column; */
  width: 400px;
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
    color: #6a737c;
    cursor: pointer;
    &:hover {
      color: #666;
    }
  }
  .user {
    box-sizing: border-box;
    border-radius: 3px;
    width: 180px;
    background-color: #d9eaf7;
    padding: 5px 6px 7px 7px;
    display: flex;
    flex-direction: column;
    > span:first-child {
      margin-bottom: 4px;
    }
    > span:nth-child(2) {
      display: flex;
      align-items: center;
      > span {
        margin-left: 8px;
        color: #0074cc;
        cursor: pointer;
      }
    }
    > span {
      color: #7d8387;

      img {
        width: 30px;
        border-radius: 5px;
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
  const data = {
    vote: 0,
    answer: 0,
    view: 0,
    questionTitle:
      "User interface for setting up notification reminders within the onboarding app",
    questionContent:
      "짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱짱짜라짱짱",
    //   userImgUrl: profile,
    userName: "짱구",
    userReputation: 20,
  };
  const navigate = useNavigate();
  const hanldeAskQuestion = () => {
    navigate("/question/edit");
  };
  return (
    <QuestionsSection>
      <QuestionTitle>
        <div className="header">
          <h1>{data.questionTitle}</h1>
          {/* 버튼 링크 연결 -> 글 작성 페이지 */}
          <Button onClick={hanldeAskQuestion}>Ask Question</Button>
        </div>
        <div className="header_info">
          <span>
            Asked
            <strong> today</strong>
          </span>
          <span>
            Modifed
            <strong> today</strong>
          </span>
          <span>
            Viewed
            <strong> 7 times</strong>
          </span>
        </div>
      </QuestionTitle>

      <QuestionContent>
        {/* 질문 본문  + Aside -> flex */}

        {/* Vote ,  */}
        <ContentContainer>
          {/* <본문 질문> <answer> <YourAnswer> -> flex: column*/}
          <div className="box">
            <Vote />

            {/* Sub -> Content -> Comment  */}
            <SubContent>
              <div>{data.questionContent}</div>

              <div className="subContent">
                {/* 왼쪽 */}
                <div>
                  {/* 자기가 작성한 글일 경우, Share Edit Delete */}
                  <div className="subButton">
                    <button>Share</button>
                    {/* Edit 편집 페이지로 이동 Link 추가 */}
                    <button>Edit</button>
                    {/* Delete 메인 페이지로 이동 Link 추가 , 서버에서 삭제*/}
                    <button>Delete</button>
                  </div>

                  {/* 자기가 작성한 글이 아닌 경우, Share Follow */}
                  <div className="subButton">
                    <button>Share</button>
                    <button>Follow</button>
                  </div>
                </div>

                {/* 오른쪽 */}

                <div>
                  <div className="user">
                    <span>asked hours ago</span>
                    <span>
                      <img src={profile} alt={profile} />
                      <span>{data.userName}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Add a comment */}

              <Comment />
            </SubContent>
          </div>

          {/* Answer */}
          <div>
            <Answer />
          </div>

          {/* Your Answer */}
          <div>
            {/* Answer 컴포넌트로 분리*/}
            <YourAnswer />
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
