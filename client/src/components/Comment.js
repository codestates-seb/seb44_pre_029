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
  padding: 12px;
  padding-left: 30px;
  font-size: 12px;
  text-align: left;

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
`;
export const AddComment = styled.div`
  margin-top: 20px;
  button {
    color: #6a737c;
    cursor: pointer;
    margin: 0;
    padding: 0;
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
              <span>{comment.comment}</span>
              <span> -{comment.userName}</span>
              <span> 날짜</span>
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
