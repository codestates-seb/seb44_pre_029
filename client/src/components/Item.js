//Item.js
// import { useNavigate } from "react-router-dom";
import profile from "../assets/Zzanggu.png";
import { styled } from "styled-components";
export const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  list-style: none;
  height: fit-content;
  padding: 16px;

  > .summary_stats {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 16px;
    width: 100px;
    gap: 6px;
    > span {
      display: flex;
      font-size: 13px;
      color: #6a737c;
    }
    > span:first-child {
      color: #0c0d0e;
    }
    @media (max-width: 800px) {
      flex-direction: row;
      justify-content: flex-start;
      padding-bottom: 10px;
    }
  }
  > .summary_content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
      cursor: pointer;
      color: #0074cc;
      &:hover {
        color: #0a95ff;
      }
    }
    .user_info {
      display: flex;
      justify-content: flex-end;
      line-height: 20px;
      font-size: 13px;
      font-weight: 400;
      align-items: center;
      > span {
        color: #6a737c;
      }
      > span:nth-child(2) {
        color: #0074cc;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          color: #0a95ff;
        }
      }
      > span:nth-child(3) {
        font-weight: 800;
      }
      > span:nth-child(4) {
        font-weight: 600;
        cursor: pointer;
        &:hover {
          color: #525960;
        }
      }

      > img {
        width: 16px;
        height: 16px;
        border-radius: 3px;
      }
      > * {
        margin-right: 3px;
      }
    }
    @media (max-width: 800px) {
      justify-content: center;
      .user_info {
        /* align-items: flex-end;
        justify-content: center; */
        display: flex;
        flex-direction: row;
      }
    }
  }
`;

/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  // const navigate = useNavigate();

  // const handleDetailQuestoin = () => {
  //   navigate("/question/:{questionId}");
  // };

  //작성시간계산 : ~~시간전 으로 표기
  // function displayedAt(createdAt) {
  //   const milliSeconds = new Date() - createdAt;
  //   const seconds = milliSeconds / 1000;
  //   if (seconds < 60) return `${Math.floor(seconds)} secs ago`;
  //   const minutes = seconds / 60;
  //   if (minutes < 60) return `${Math.floor(minutes)} min ago`;
  //   const hours = minutes / 60;
  //   if (hours < 24) return `${Math.floor(hours)} hour ago`;
  //   const days = hours / 24;
  //   if (days < 7) return `${Math.floor(days)} days ago`;
  //   const weeks = days / 7;
  //   if (weeks < 5) return `${Math.floor(weeks)} weeks ago`;
  //   const months = days / 30;
  //   if (months < 12) return `${Math.floor(months)} months ago`;
  //   const years = days / 365;
  //   return `${Math.floor(years)}years ago`;
  // }

  return (
    <ItemContainer>
      <div className="summary_stats">
        <span>
          <strong>{item.vote}</strong>&nbsp;views
        </span>
        <span>
          <strong>{item.answer}</strong>&nbsp;answers
        </span>
        <span>
          <strong>{item.view}</strong>&nbsp;views
        </span>
      </div>

      <div className="summary_content">
        {/* <h3 onClick={handleDetailQuestoin}>{item.questionTitle}</h3> */}
        <h3>{item.questionTitle}</h3>
        <div>{item.questionContent}</div>

        <div className="user_info">
          <img src={profile} alt={profile}></img>
          <span>{item.userName}</span>
          <span>{item.userReputation}</span>

          {/* 마지막 createAt 시각 */}
          <span>asked </span>
          {/* <span>asked {displayedAt(new Date(data.createdAt))}</span> */}
        </div>
      </div>
    </ItemContainer>
  );
};

export default Item;
