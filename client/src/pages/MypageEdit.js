import styled from "styled-components";
import Zzanggu from "../assets/Zzanggu.png";
import { HiPencil } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
// import { useState } from "react";

const MypageWrap = styled.section`
  width: 1000px;
  text-align: left;
  float: right;
  padding: 30px;
  hr {
    background-color: #e1ecf4;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 22px;
  }
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

const EditProfileWrap = styled.div`
  .EditBtnWrap {
    display: flex;
    align-items: center;
  }
`;

const EditProfileForm = styled.div`
  padding: 10px 15px;
  border: 2px solid #d9d9d9;
  border-radius: 5px;
  .editImage {
    position: relative;
    > img {
      width: 230px;
      height: 230px;
    }
    > p {
      position: absolute;
      bottom: 0;
      margin: 0;
      padding: 12px 0;
      background-color: #545454;
      color: #fff;
      text-align: center;
      width: 230px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const EditContent = styled.div`
  width: 100%;
  margin: 15px 0;
  > input {
    width: 96%;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  > div {
    padding: 10px;
  }
  .privateInfo {
    display: inline-block;
    margin-right: 10px;
  }
  span {
    color: #545454;
  }
`;

const LinksContent = styled.div`
  width: 33.3%;
  display: inline-block;
  > h4 {
    margin: 10px 0;
  }
  input {
    width: 90%;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
`;

const EditBtn = styled.button`
  background-color: #0a95ff;
  border: 1px solid #81c5ff;
  color: #fff;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px;
  &:hover {
    background-color: #007ad8;
    cursor: pointer;
  }
`;

const MypageEdit = () => {
  // const [isValue, setIsValue] = useState("");

  // const changeValue = (e) => {
  //   setIsValue(e.target.value);
  //   console.log(isValue);
  // };

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
        <ProfileBtn>
          <HiPencil size={15} />
          <span>Edit profile</span>
        </ProfileBtn>
      </MypageProfile>
      <MypageCategoryWrap>
        <MypageCategoty>Profile</MypageCategoty>
        <MypageCategoty>Activity</MypageCategoty>
        <MypageCategoty>Saves</MypageCategoty>
        <MypageCategoty className="active">Settings</MypageCategoty>
      </MypageCategoryWrap>
      <EditProfileWrap>
        <h1>Edit your profile</h1>
        <hr />
        <h2>Public information</h2>
        <form>
          <EditProfileForm>
            <div className="editImage">
              <h3>Profile image</h3>
              <img src={Zzanggu} alt="짱구" />
              <p>Change picture</p>
            </div>
            <EditContent>
              <h3>Display name</h3>
              <input type="text" />
            </EditContent>
            <EditContent>
              <h3>Location</h3>
              <input type="text" />
            </EditContent>
            <EditContent>
              <h3>Title</h3>
              <input type="text" />
            </EditContent>
            <EditContent>
              <h3>About me</h3>
              <input type="text" />
            </EditContent>
            <EditContent>
              <h3>Links</h3>
              <div>
                <LinksContent>
                  <h4>Website Link</h4>
                  <input type="text" />
                </LinksContent>
                <LinksContent>
                  <h4>Twitter link or username</h4>
                  <input type="text" />
                </LinksContent>
                <LinksContent>
                  <h4>Github link or username</h4>
                  <input type="text" />
                </LinksContent>
              </div>
            </EditContent>
            <EditContent>
              <h3 className="privateInfo">Private information</h3>
              <span>Not shown publicly</span>
              <div>
                <LinksContent>
                  <h4>Full name</h4>
                  <input type="text" />
                </LinksContent>
              </div>
            </EditContent>
            <div className="EditBtnWrap">
              <EditBtn>Save profile</EditBtn>
              <EditBtn>Cancel</EditBtn>
            </div>
          </EditProfileForm>
        </form>
      </EditProfileWrap>
    </MypageWrap>
  );
};

export default MypageEdit;
