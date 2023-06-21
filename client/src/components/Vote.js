//Vote.js
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaRegClock,
} from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import styled from "styled-components";
import { useState } from "react";

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
`;
const Vote = () => {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <>
      <VoteContainer>
        <div className="button_container">
          <button>
            <FaChevronCircleUp size="30" />
          </button>
          <span>0</span>
          <button>
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
