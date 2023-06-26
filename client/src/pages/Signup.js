//signup.js
import { FaQuestionCircle, FaSort } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImPriceTags, ImTrophy } from "react-icons/im";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import GoogleButton from "../components/GoogleButton";
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f1f2f3;

  a {
    text-decoration: none;
    color: inherit;
    color: #0074cc;

    cursor: pointer;
    &:hover {
      color: #0a95ff;
    }
  }
`;
export const DivContent = styled.div`
  display: flex;
`;

export const LeftDiv = styled.div`
  margin-right: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    margin-bottom: 32px;
    font-size: 27px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
  }
  > div:not(:last-child) {
    display: flex;
    align-items: center;
    line-height: 19px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;

    > div {
      line-height: 15px;
      > svg {
        color: #0a95ff;
      }
    }
    > div:last-child {
      display: ;
    }
  }

  > div:last-child {
    text-align: left;
    font-size: 13px;
    color: #6a737c;
    > div:last-child {
      /* color: #0074cc;
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
      }
      &:hover {
        color: #0a95ff;
      } */
    }
  }
`;
export const IconDiv = styled.div`
  margin-right: 10px;
  width: 30px;
  text-align: center;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 316px;

  > div:last-child {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    /* > span {
      color: #1f8ce0;
    } */
  }
`;
export const OauthDiv = styled.div`
  width: 100%;
  margin: 10px;
  button {
    width: 100%;
    margin: 8px 0;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    > svg {
      margin-right: 10px;
    }
  }
  .github {
    /* font-weight: 300; */
    /* color: white; //#ffffff; */
    /* background: #2d3535; */
    background-color: #fff;
    border-radius: 5px;
    &:hover {
      background-color: #f2f2f2; //#232629;
    }
  }
`;
export const SignupDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border-radius: 7px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 48px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;

  font-size: 13px;
  text-align: left;
  line-height: 17px;
  margin-bottom: 32px;
`;
export const FormContainer = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  > div {
    label {
      font-size: 15px;
      font-weight: 700;
    }
    p {
      font-size: 11px;
      margin-top: 0;
      color: #6a737c;
    }
  }
  > div:last-child {
    margin-top: 32px;
    font-size: 12px;
    text-align: left !important;
    line-height: 15px;
    vertical-align: baseline;
    color: #6c747d;
    span {
      color: #0a95ff;
    }
  }

  .isName,
  .isEmail,
  .isPassword {
    > p {
      font-size: 11px;
      margin-top: 0;
      color: red;
    }
  }
`;
export const RobotCheckDiv = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 0 2px 0;
    margin: 6px 0;
    border-radius: 3px;
    border: 1px solid hsl(210, 8%, 75%);
    background-color: #f1f2f3;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;
      border: 1px solid #b0b8bf; //hsl(210, 8%, 75%);
      box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 48px 0px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
      background-color: #ffffff;
    }
    input {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
    label {
      font-size: 15px;
      margin: 10px;
    }
  }
`;
export const CheckDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin: 12px 0;
  input {
    margin: 0;
  }
  > div {
    > label {
      font-size: 12px;
      font-weight: 400;
      vertical-align: middle;
    }
    > svg {
      color: #bcbbbb;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  margin: 4px 0;
  padding: 10px;
  color: white;
  background-color: #0a95ff;
  border-radius: 4px;
  outline: none;
  border: none;

  &:hover {
    background-color: #0074cc;
  }
`;
export const InputEl = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 3px;
  outline: none;

  border: ${(props) => props.border};

  &:focus {
    outline: none !important;
    border: ${(props) => props.focusborder};
    box-shadow: ${(props) => props.shadow};
  }
`;
const Signup = () => {
  //이름, 이메일, 비밀번호 입력 Input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NameInputRef = useRef(null);
  const EmailInputRef = useRef(null);
  const PasswordInputRef = useRef(null);
  // const navigate = useNavigate();

  //false -> 기본값 , true -> 통과되지 못함(red)
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    const isValid = !isName && !isEmail && !isPassword;
    if (isValid) {
      console.log("유효함");
      console.log(name, email, password);
    } else {
      console.log(isName ? "이름 문제" : "");
      console.log(isEmail ? "이메일 문제" : "");
      console.log(isPassword ? "패스워드 문제" : "");
    }
  }, [name, email, password]);

  //이름 핸들러
  const nameHanlder = () => {
    let nameInputValue = NameInputRef.current.value;
    setName(nameInputValue);

    //!!!!유효성 검사 : 이름 중복 -> 서버 측?
    setIsName(false);
  };

  //이메일 핸들러
  const emailHandler = () => {
    let emailInputValue = EmailInputRef.current.value;
    setEmail(emailInputValue);

    //유효성 검사 : 정규식 + 이메일 중복 -> 서버 측?
    const emailRegex = /[a-z0-9]+@[a-z]+.[a-z]{2,6}/;
    // /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (emailRegex.test(emailInputValue)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  //비밀번호 핸들러
  const passwordHanlder = () => {
    let passwordInputValue = PasswordInputRef.current.value;
    setPassword(passwordInputValue);

    //유효성 검사 : 비밀번호 글자수 제한 - 8글자 이상 12글자 이하로만 가능7글자 이하 혹은 13글자 이상
    if (passwordInputValue.length >= 8 && passwordInputValue.length <= 12) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };
  const navigate = useNavigate();
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const URL = `${PROXY}/users`;

  //폼 제출 핸들러
  const formSubmitHandler = (e) => {
    e.preventDefault();

    nameHanlder();
    emailHandler();
    passwordHanlder();

    const userInfo = {
      nickname: name,
      email,
      password,
    };

    axios
      .post(URL, userInfo)
      .then((response) => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);

        navigate("/"); //로그인 페이지로 이동
      })
      .catch((error) => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });

    // fetch("/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", //;charset=UTF-8",
    //     // Accept: "application/json",
    //     // "Content-Type": "text/html; charset=utf-8",
    //     // "application/json",
    //     // "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    //   },
    //   body: JSON.stringify(userInfo),
    // })
    //   .then((res) => console.log(res))
    //   .then((data) => console.log(data));
  };

  const handleGoogleLogin = () => {
    window.location.href = "/oauth2/authorization/google";
  };
  return (
    <DivContainer>
      <DivContent>
        <LeftDiv>
          <h1>Join the Stack Overflow community</h1>
          <div>
            <IconDiv>
              <FaQuestionCircle />
            </IconDiv>
            <div>Get unstuck - ask a question</div>
          </div>
          <div>
            <IconDiv>
              <FaSort />
            </IconDiv>
            <div>Unlock new privileges like voting and commenting</div>
          </div>
          <div>
            <IconDiv>
              <ImPriceTags />
            </IconDiv>
            <div>
              Save your favorite questions, answers, watch tags, and more
            </div>
          </div>
          <div>
            <IconDiv>
              <ImTrophy />
            </IconDiv>
            <div>Earn reputation and badges</div>
          </div>
          <div>
            <div>
              Collaborate and share knowledge with a private group for FREE.
            </div>
            <div>
              <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
                Get Stack Overflow for Teams free for up to 50 users
              </a>
            </div>
          </div>
        </LeftDiv>
        <RightDiv>
          {/* <GoogleButton /> */}
          <OauthDiv>
            <button className="github" onClick={handleGoogleLogin}>
              <FcGoogle />
              Sign up with Google
            </button>
          </OauthDiv>

          <SignupDiv>
            <FormContainer
              // onSubmit={formSubmitHandler}
              $name={isName}
              $email={isEmail}
              $password={isPassword}
            >
              {/* 이름 input */}
              <div>
                <label htmlFor="display_name">Display name</label>
                <div className="isName">
                  {isName ? (
                    <>
                      <InputEl
                        border="1px solid red"
                        shadow="0 0 0 4px #f0c0bd"
                        focusborder="1px solid red"
                        type="text"
                        name="display_name"
                        id="display_name"
                        ref={NameInputRef}
                      />
                      <p>Please </p>
                    </>
                  ) : (
                    <>
                      <InputEl
                        border="1px solid #b0b8bf"
                        shadow="0 0 0 4px #ddeaf7"
                        focusborder="1px solid #0a95ff"
                        type="text"
                        name="display_name"
                        id="display_name"
                        ref={NameInputRef}
                      />
                    </>
                  )}
                </div>
              </div>
              {/* 이메일 input */}
              <div className="emailInput">
                <label htmlFor="email">Email</label>
                <div className="isEmail">
                  {isEmail ? (
                    <>
                      <InputEl
                        border="1px solid red"
                        shadow="0 0 0 4px #f0c0bd"
                        focusborder="1px solid red"
                        type="text"
                        name="email"
                        id="email"
                        ref={EmailInputRef}
                      />
                      <p>정규식에 맞게 잘 적어주세요.</p>
                    </>
                  ) : (
                    <>
                      <InputEl
                        border="1px solid #b0b8bf"
                        shadow="0 0 0 4px #ddeaf7"
                        focusborder="1px solid #0a95ff"
                        type="text"
                        name="email"
                        id="email"
                        ref={EmailInputRef}
                      />
                    </>
                  )}
                </div>
              </div>
              {/* 패스워드 input */}
              <div className="passwordInput">
                <label htmlFor="password">Password</label>
                <div className="isPassword">
                  {isPassword ? (
                    <>
                      <InputEl
                        border="1px solid red"
                        shadow="0 0 0 4px #f0c0bd"
                        focusborder="1px solid red"
                        type="password"
                        name="password"
                        id="password"
                        ref={PasswordInputRef}
                      />
                      <p>Please write password at least 8 characters.</p>
                    </>
                  ) : (
                    <>
                      <InputEl
                        border="1px solid #b0b8bf"
                        shadow="0 0 0 4px #ddeaf7"
                        focusborder="1px solid #0a95ff"
                        type="password"
                        name="password"
                        id="password"
                        ref={PasswordInputRef}
                        required
                      />
                    </>
                  )}
                </div>
                <p>
                  Passwords must contain at least eight characters, including at
                  least 1 letter and 1 number.{" "}
                </p>
              </div>
              <div>
                <RobotCheckDiv>
                  <div>
                    <div>
                      <input type="checkbox" id="robot" />
                      <div>
                        <label>{`I'm not a robot`}</label>
                      </div>
                    </div>
                  </div>
                </RobotCheckDiv>
                <CheckDiv>
                  <div>
                    <input type="checkbox" id="opt_in"></input>
                  </div>
                  <div>
                    <label htmlFor="opt_in">
                      Opt-in to receive occasional product updates, user
                      research invitations, company announcements, and digests.
                    </label>
                  </div>
                  <div>
                    <FaQuestionCircle />
                  </div>
                </CheckDiv>
              </div>
              <div>
                <Button type="submit" onClick={formSubmitHandler}>
                  Sign up
                </Button>
              </div>
              <div>
                By clicking “Sign up”, you agree to our{" "}
                <span>
                  <a href="https://stackoverflow.com/legal/terms-of-service/public">
                    terms of service
                  </a>
                </span>{" "}
                and acknowledge that you have read and understand our{" "}
                <span>
                  <a href="https://stackoverflow.com/legal/privacy-policy">
                    privacy policy
                  </a>
                </span>{" "}
                and{" "}
                <span>
                  <a href="https://stackoverflow.com/conduct">
                    code of conduct.
                  </a>
                </span>
              </div>
            </FormContainer>
          </SignupDiv>
          <div>
            Already have an account? <Link to="/">Log in</Link>
          </div>
        </RightDiv>
      </DivContent>
    </DivContainer>
  );
};

export default Signup;
