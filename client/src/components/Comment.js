import { useState } from "react";
import { styled } from "styled-components";

import { YourAnswerInputDiv } from "./YourAnswer";
export const CommnetContainer = styled.div`
  /* color: #6a737c; */
  > div:first-child {
    border-top: 0.7px solid #ccc;
  }
`;
export const CommentList = styled.div`
  /* border-top: 0.7px solid #ccc; */
  border-bottom: 0.7px solid #ccc;
  padding: 8px;
  padding-left: 30px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div.content {
    > span:first-child {
      font-weight: 600;
    }
    > span:nth-child(2) {
      color: #0074cc;
    }
    > span:last-child {
      color: #7d8387;
    }
    > span:not(:first-child) {
      cursor: pointer;
    }
  }
  div.buttonZone {
    button {
      font-size: 11px;
      cursor: pointer;
    }
    > button:first-child {
      color: #0074cc;
    }
    > button:last-child {
      color: red;
    }
  }
`;
export const AddComment = styled.div`
  margin-top: 20px;
  button:first-child {
    color: #b5bac0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    &:hover {
      color: #0375cc;
    }
  }
`;
export const AddCommentInput = styled(YourAnswerInputDiv)`
  margin: 16px 0;
  textarea {
    height: 50px;
    margin-right: 10px;
  }
  button {
    background: white;
    padding: 0 5px;
    border: 1px solid #dfdfdf;
  }
`;

const Comment = () => {
  // 임의 댓글 데이터
  const comments = [
    {
      userName: "이무진",
      comment: "가을 타나봐",
      // createdAt: , 날짜
    },
    {
      userName: "아이유",
      comment: "정류장",
      // createdAt: , 날짜
    },
  ];
  const [newComment, setNewComment] = useState("");
  const [addComment, setAddComment] = useState(false);
  const hanldeAddComment = () => {
    setAddComment(!addComment);
  };
  const hanldeChangeComment = (e) => {
    setNewComment(e.target.value);
  };
  const hanldeSubmitComment = () => {
    console.log("submit");
    // 새 댓글 post 요청
    setNewComment("");
    hanldeAddComment();
  };
  return (
    <>
      <CommnetContainer>
        {/* 답변이 있는 경우 comment 들만 */}
        {comments.map((comment, idx) => {
          return (
            <CommentList key={idx}>
              <div className="content">
                <span>{comment.comment}&nbsp;–</span>
                <span>&nbsp;{comment.userName}</span>
                <span>&nbsp;날짜</span>
              </div>
              {/* 자신이 작성한 댓글일 경우 -> Edit or Delete */}
              <div className="buttonZone">
                <button>Edit</button>
                <button>Delete</button>
              </div>
              {/* null */}
            </CommentList>
          );
        })}
        {/* 답변 추가 구역*/}
        <AddComment>
          <button onClick={hanldeAddComment}>Add a comment</button>
          {addComment && (
            <>
              <AddCommentInput>
                <textarea
                  value={newComment}
                  type="text"
                  placeholder="답변 내용을 입력해주세요"
                  onChange={hanldeChangeComment}
                />
                <button type="submit" onClick={hanldeSubmitComment}>
                  Submit
                </button>
              </AddCommentInput>
            </>
          )}
        </AddComment>
      </CommnetContainer>
    </>
  );
};
export default Comment;
