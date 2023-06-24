//Login.js
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopLogo from "../assets/Stack_Overflow_icon.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  //   const [showPasswordError, setShowPasswordError] = useState(false);
  const emailReg = /[a-z0-9]+@[a-z]+.[a-z]{2,6}/;
  const pwdReg = /^.{8,}$/;
  const navigate = useNavigate();

  useEffect(() => {
    if (!email.length) {
      setEmailError("Email cannot be empty.");
    } else if (!emailReg.test(email)) {
      setEmailError("The email is not a valid email address.");
    } else {
      setEmailError("");
    }
  }, [email, emailReg]);

  useEffect(() => {
    if (!password.length) {
      //   setShowPasswordError("Password cannot be empty.");

      setPasswordError("Password cannot be empty.");
    } else if (!pwdReg.test(password)) {
      //   setShowPasswordError("Password must be at least 8 characters long.");

      setPasswordError("Password must be at least 8 characters long.");
    } else {
      //   setShowPasswordError("");
      setPasswordError("ok");
    }
  }, [password, pwdReg]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      password.length &&
      email.length &&
      emailReg.test(email)
      // &&
      // pwdReg.test(password)
    ) {
      console.log("로그인 성공!");
      setEmailError("");
      setPasswordError("");
      try {
        const userInfo = {
          email,
          password,
        };
        axios
          .post("/login", userInfo)
          .then((response) => {
            // 요청이 성공한 경우의 처리

            console.log(response);
            localStorage.setItem(
              "Authorization",
              response.headers.authorization,
            );
            localStorage.setItem("userId", response.data.userId);
            navigate("/home");
          })
          .catch((error) => {
            // 요청이 실패한 경우의 처리
            console.error(error);
            console.log(emailError);
            console.log(passwordError);
          });
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const handleGoogleLogin = () => {
    window.location.href = "/oauth2/authorization/google";
  };
  return (
    <LoginPageBox>
      <LoginBox>
        <LoginLogo href="#">
          <LoginLogoImg src={TopLogo} alt="logo" />
        </LoginLogo>

        <SocialLoginBtn onClick={handleGoogleLogin}>
          <SocialLoginLinkBox>
            <SocialLoginLogo>
              <FcGoogle className="logo" />
            </SocialLoginLogo>
            <SocialLoginContent>Log in with Google</SocialLoginContent>
          </SocialLoginLinkBox>
        </SocialLoginBtn>

        <UserLoginFormBox>
          <form
          // onSubmit={handleSubmit}
          >
            <EmailFormBox>
              <EmailIndicator>Email</EmailIndicator>
              <EmailInput value={email} onChange={handleEmailChange} />
            </EmailFormBox>
            <PasswordFormBox>
              <PasswordGuideBox>
                <PasswordIndicator>Password</PasswordIndicator>
                <FindPassword href="#">Forgot Password?</FindPassword>
              </PasswordGuideBox>
              <PasswordInput
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {/* {showPasswordError && <span>{showPasswordError}</span>} */}

              {passwordError && <span>{passwordError}</span>}
            </PasswordFormBox>
            <LoginSubmitBox>
              {/* <button onClick={handleSubmit}>Log in</button> */}
              <LoginSubmitBtn onClick={handleSubmit}>Log in</LoginSubmitBtn>

              {/* <LoginSubmitBtn to="/Home">Log in</LoginSubmitBtn> */}
            </LoginSubmitBox>
          </form>
        </UserLoginFormBox>

        <SignUpLinkBox>
          <SignUpText>Don&apos;thave an account?</SignUpText>
          <SignUpLink to="/signup">Sign up</SignUpLink>
        </SignUpLinkBox>
      </LoginBox>
    </LoginPageBox>
  );
}

const LoginPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
  height: 100vh;
  width: 100vw;
`;

const LoginBox = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginLogo = styled.a`
  display: block;
  width: 62px;
  height: 67px;
  margin-bottom: 20px;
`;

const LoginLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SocialLoginBtn = styled.div`
  /* width: 278px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  /* padding: 10px; */
  line-height: 15px;
  height: 40px;
  background-color: #fff; //#232629;
  border: 1px solid #ccc; //#232629;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #f2f2f2; //#000000;
  }
`;

const SocialLoginLinkBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLoginLogo = styled.div`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 5px;

  .logo {
    color: black; //#fff;
  }
`;

const SocialLoginContent = styled.div`
  color: black; //#fff;
  font-size: 15px;
`;

const UserLoginFormBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 234px;
  padding: 24px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 4px #d9d9d9;
  margin-bottom: 30px;
`;

const EmailFormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const EmailIndicator = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #0c0d0e;
  font-size: 15px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    border: 1px solid #59a4de;
    outline: none;
  }
`;

const PasswordFormBox = styled.div`
  margin-bottom: 15px;
  > span {
    font-size: 12px;
  }
`;

const PasswordGuideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const PasswordIndicator = styled.div`
  font-weight: bold;
  color: #0c0d0e;
  font-size: 15px;
`;

const FindPassword = styled.a`
  text-decoration: none;
  color: #0074cc;
  font-size: 12px;

  &:hover {
    color: #0a95ff;
  }
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    border: 1px solid #59a4de;
    outline: none;
  }
`;

const LoginSubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSubmitBtn = styled(Link)`
  width: 100%;
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: #07c;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #0064bd;
    box-shadow: none;
  }
`;

const SignUpLinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpText = styled.div`
  color: #232629;
  font-size: 14px;
  margin-right: 5px;
`;

const SignUpLink = styled(Link)`
  color: #0074cc;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #0a95ff;
  }
`;
export default LoginPage;
