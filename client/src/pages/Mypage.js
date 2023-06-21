import styled from "styled-components";
import Zzanggu from "../assets/Zzanggu.png";
import { HiPencil } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const MypageWrap = styled.section`
  width: 1000px;
  text-align: left;
  float: right;
  padding: 30px;
  // 컴포넌트, 페이지 다 만들고 레이아웃 배치하기
`;

const ProfileBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px 10px;
  border: 1px solid #545454;
  margin: 0 5px;
  border-radius: 5px;
  color: #545454;
  font-size: 15px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
  span {
    padding: 0 10px 0 5px;
  }
`;

const MypageProfile = styled.div`
  display: flex;
  position: relative;
  color: #545454;
  div.profileContents {
    padding: 0 10px;
    h1 {
      margin-left: 13px;
    }
    p {
      display: inline;
      padding: 0 10px;
      font-size: 14px;
    }
    svg {
      padding: 0 5px;
    }
  }
`;

const MypageCategoryWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
  .active {
    background-color: #f4852b;
    color: #fff;
  }
`;

const MypageCategoty = styled.li`
  display: inline-block;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  font-size: 15px;
`;

const PostWrap = styled.div`
  position: relative;
  margin: 5px 0 10px 0;
  div {
    width: 70%;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
  &:last-child h1 {
    margin-top: 30px;
  }
`;
const Mypage = () => {
  return (
    <MypageWrap>
      <MypageProfile>
        <img src={Zzanggu} alt="짱구" />
        <div className="profileContents">
          <h1>Name</h1>
          <p>
            <MdCake />
            Member for 3 days
          </p>
          <p>
            <AiOutlineClockCircle />
            Last seen this week
          </p>
          <p>
            <FaRegCalendarAlt />
            Visited 3 days, 3 consecutive
          </p>
        </div>
        <Link to="/mypage/edit">
          <ProfileBtn>
            <HiPencil size={15} />
            <span>Edit profile</span>
          </ProfileBtn>
        </Link>
      </MypageProfile>
      <MypageCategoryWrap>
        <MypageCategoty>Profile</MypageCategoty>
        <MypageCategoty className="active">Activity</MypageCategoty>
        <MypageCategoty>Saves</MypageCategoty>
        <Link to="/mypage/edit">
          <MypageCategoty>Settings</MypageCategoty>
        </Link>
      </MypageCategoryWrap>
      <PostWrap>
        <h1>Likes</h1>
        <div></div>
      </PostWrap>
      <PostWrap>
        <h1>Questions</h1>
        <div></div>
      </PostWrap>
    </MypageWrap>
  );
};

export default Mypage;
