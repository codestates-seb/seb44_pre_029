import { styled } from "styled-components";
import profile from "../assets/Zzanggu.png";
import Vote from "./Vote";
import Comment from "./Comment";
import { ContentContainer, SubContent } from "../pages/Questions";
export const AnswerTitle = styled.div`
  color: #27292c;
  font-size: 13px;

  h2 {
    margin: 0;
    margin-top: 30px;
  }
`;
export const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Answer = ({ answerData }) => {
  // const answerData = [
  //   { id: 1, answerTitle: "대답1", userName: "짱구", userReputation: 30 },
  //   { id: 2, answerTitle: "대답2", userName: "맹구", userReputation: 30 },
  //   { id: 3, answerTitle: "대답3", userName: "철수", userReputation: 30 },
  // ];
  return (
    <>
      <AnswerTitle>
        <h2>3 Answer</h2>
      </AnswerTitle>

      <AnswerContent>
        {answerData &&
          answerData.map((answer) => (
            <ContentContainer key={answer.id}>
              {/* <본문 질문> <answer> <YourAnswer> -> flex: column*/}
              <div className="box">
                <Vote />

                {/* Sub -> Content -> Comment  */}
                <SubContent>
                  <div>{answer.answerTitle}</div>

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
                          <div>
                            <span>{answer.userName}</span>
                            <span>{answer.userReputation}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add a comment */}
                  <Comment />
                </SubContent>
              </div>

              {/* Answer */}
            </ContentContainer>
          ))}
      </AnswerContent>
    </>
  );
};

export default Answer;
