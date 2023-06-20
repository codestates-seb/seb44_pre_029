//Item.js
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
    align-items: flex-end;
    margin-right: 16px;
    gap: 6px;
    > span {
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
  return (
    <ItemContainer>
      <div className="summary_stats">
        <span>
          <strong>{item.vote}</strong> views
        </span>
        <span>
          <strong>{item.answer}</strong> answers
        </span>
        <span>
          <strong>{item.view}</strong> views
        </span>
      </div>

      <div className="summary_content">
        <h3>{item.questionTitle}</h3>
        <div>{item.questionContent}</div>

        <div className="user_info">
          <img src={profile} alt={profile}></img>
          <span>{item.userName}</span>
          <span>{item.userReputation}</span>

          {/* 마지막 createAt 시각 */}
          <span>aksed </span>
        </div>
      </div>
    </ItemContainer>
  );
};

export default Item;
