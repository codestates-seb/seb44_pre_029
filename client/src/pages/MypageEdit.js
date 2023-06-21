import styled from "styled-components";
import Zzanggu from "../assets/Zzanggu.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

// const LinksContent = styled.div`
//   width: 33.3%;
//   display: inline-block;
//   > h4 {
//     margin: 10px 0;
//   }
//   input {
//     width: 90%;
//     height: 40px;
//     border: 1px solid #d9d9d9;
//     border-radius: 5px;
//     &:focus {
//       outline: none;
//     }
//   }
// `;

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
  // 이메일, 패스워드, 닉네임 일단 공란
  // 데이터 받아오게 되면 그때 채워넣기
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [nickname, setNickname] = useState("");

  // 리팩토링할 때 참고
  const [values, setValues] = useState({
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

  // const changeEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };
  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  //   console.log(password);
  // };
  // const changeNickname = (e) => {
  //   setNickname(e.target.value);
  //   console.log(nickname);
  // };

  const handleSubmit = (e) => {
    e.preventDefault;
    fetch("https://1232-121-187-22-182.ngrok-free.app/users", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log(res);
        return res.json;
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    fetch("/users", {
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  // console.log(values);

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
      </MypageProfile>
      <MypageCategoryWrap>
        <MypageCategoty>Profile</MypageCategoty>
        <Link to="/mypage">
          <MypageCategoty>Activity</MypageCategoty>
        </Link>
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <EditContent>
              <h3>Email</h3>
              <input
                type="text"
                onChange={(e) => handleValueChange(e)}
                name="email"
              />
            </EditContent>
            <EditContent>
              <h3>Password</h3>
              <input
                type="text"
                onChange={(e) => handleValueChange(e)}
                name="password"
              />
            </EditContent>
            <EditContent>
              <h3>Nickname</h3>
              <input
                type="text"
                onChange={(e) => handleValueChange(e)}
                name="nickname"
              />
            </EditContent>
            <div className="EditBtnWrap">
              <EditBtn>Save profile</EditBtn>
              <Link to="/mypage">
                <EditBtn>Cancel</EditBtn>
              </Link>
            </div>
          </form>
        </EditProfileForm>
      </EditProfileWrap>
    </MypageWrap>
  );
};

export default MypageEdit;

// export async function getAllfetch() {
//   const response = await fetch("/users", {
//     method: "GET",
//     header: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   return await response.json();
// }
