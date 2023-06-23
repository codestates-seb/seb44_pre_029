//Vote.js
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaRegClock,
} from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import styled from "styled-components";
import { useState, useEffect } from "react";

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
const Vote = ({ vote }) => {
  const [voteSum, setVoteSum] = useState(0);
  //유저당 한번만 가능하게
  // const [voteUp, setVotedUp] = useState(false);
  // const [voteDown, setVotedDown] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  const hanldeVoteUp = () => {
    setVoteSum((prev) => prev + 1);
  };
  const hanldeVoteDown = () => {};
  useEffect(() => {
    setVoteSum(vote);
  }, []);
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
