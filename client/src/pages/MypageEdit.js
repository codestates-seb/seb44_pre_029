import styled from "styled-components";
import Zzanggu from "../assets/Zzanggu.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MypageWrap = styled.section`
  width: 1062px;
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
  /* .EditBtnWrap {
    display: flex;
    align-items: center;
  } */
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
  const user_id = localStorage.getItem("userId");
  const [values, setValues] = useState({
    userid: user_id,
    email: "",
    password: "",
    nickname: "",
  });

  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // get 요청 핸들러
  useEffect(() => {
    axios
      .get(`/users/${user_id}`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
      })
      .then((res) =>
        setValues({
          ...values,
          email: res.data.email,
          password: res.data.password,
          nickname: res.data.nickname,
        }),
      )
      .catch((error) => console.log(error));
  }, []);

  // patch 요청 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/users/edit/${user_id}`, values)
      .then(navigate(`/users/${user_id}`));
  };

  const navigate = useNavigate();

  const handleMypage = () => {
    navigate(`/users/${user_id}`);
  };

  return (
    <MypageWrap>
      <MypageProfile>
        <img src={Zzanggu} alt="짱구" />
        <div className="profileContents">
          <h1>{values.nickname}</h1>
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
      </MypageProfile>
      <MypageCategoryWrap>
        <MypageCategoty>Profile</MypageCategoty>
        <MypageCategoty onClick={handleMypage}>Activity</MypageCategoty>
        <MypageCategoty>Saves</MypageCategoty>
        <MypageCategoty className="active">Settings</MypageCategoty>
      </MypageCategoryWrap>
      <EditProfileWrap>
        <h1>Edit your profile</h1>
        <hr />
        <h2>Public information</h2>
        <EditProfileForm>
          <div className="editImage">
            <h3>Profile image</h3>
            <img src={Zzanggu} alt="짱구" />
            <p>Change picture</p>
          </div>
          <EditContent>
            <h3>Email</h3>
            <input
              type="text"
              onChange={(e) => handleValueChange(e)}
              name="email"
              value={values.email}
            />
          </EditContent>
          <EditContent>
            <h3>Password</h3>
            <input
              type="password"
              onChange={(e) => handleValueChange(e)}
              name="password"
              value={values.password}
              disabled
            />
          </EditContent>
          <EditContent>
            <h3>Nickname</h3>
            <input
              type="text"
              onChange={(e) => handleValueChange(e)}
              name="nickname"
              value={values.nickname}
            />
          </EditContent>
          <EditBtn onClick={handleSubmit}>Save profile</EditBtn>
          <EditBtn onClick={handleMypage}>Cancel</EditBtn>
        </EditProfileForm>
      </EditProfileWrap>
    </MypageWrap>
  );
};

export default MypageEdit;
