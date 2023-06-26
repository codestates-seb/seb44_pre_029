//Vote.js
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaRegClock,
} from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export const VoteContainer = styled.div`
  padding-right: 16px;

  .button_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin: 2px;
    border: none;
    background-color: transparent;
    color: #ccc;
  }
  button:first-child,
  button:nth-child(3) {
    &:hover {
      color: #fce3cf;
    }
  }
`;
const Vote = ({ vote, questionId }) => {
  const [voteSum, setVoteSum] = useState(0);
  //유저당 한번만 가능하게
  const [voteUp, setVotedUp] = useState(false);
  // const [voteDown, setVotedDown] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  const hanldeVoteUp = () => {
    if (!voteUp) {
      //한번만 되게
      setVoteSum((prev) => prev + 1);
      setVotedUp(true);
      //다시 post 요청
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
    }
  };
  const hanldeVoteDown = () => {};
  useEffect(() => {
    setVoteSum(vote);
  }, []);
  useEffect(() => {
    // console.log(voteSum);
    // const newData = {
    //   ...data,
    // }
    // axios.post(`questions/${questionData.question_id}`, );
  }, [voteSum]);
  return (
    <>
      <VoteContainer>
        <div className="button_container">
          <button onClick={hanldeVoteUp}>
            <FaChevronCircleUp size="30" />
          </button>
          <span>{voteSum}</span>
          <button onClick={hanldeVoteDown}>
            <FaChevronCircleDown size="30" />
          </button>
          <button onClick={handleBookmark}>
            {bookmark ? <BsBookmarkFill /> : <BsBookmark />}
          </button>
          <button>
            <FaRegClock />
          </button>
        </div>
      </VoteContainer>
    </>
  );
};

export default Vote;
