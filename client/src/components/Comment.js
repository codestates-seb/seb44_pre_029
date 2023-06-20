import { useState } from "react";
import { styled } from "styled-components";

import { YourAnswerInputDiv } from "./YourAnswer";
export const CommnetContainer = styled.div`
  /* color: #6a737c; */
`;
export const AddComment = styled.div`
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
