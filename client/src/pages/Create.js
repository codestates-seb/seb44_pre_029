//Create.js
import HelpItem from "../components/HelpItem";
import InputHeader from "../components/InputHeader";
import CreateTip from "../components/CreateTip";
import { InputItem, TextareaItem } from "../components/CreateContent";
import axios from "axios";
import { Button } from "./Signup";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

export const CreateDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const DivContainer = styled.div`
  /* padding: 0 16px; */
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 16px;
`;
export const HedaerSection = styled.section`
  margin: 16px 0;
  /* padding: 40px 0 60px 0; */
  color: #3b4044;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: left;
    font-size: 30px;
    font-weight: 700;
  }
`;
export const MainSection = styled.section``;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 10px;
  margin-bottom: 16px;
`;
export const FormContainer = styled.form`
  .input_container {
    border: 1px solid #d5d9db;
    padding: 24px;
    text-align: left;
    width: 700px;
  }
  .input_title {
    font-weight: 600;
  }
  .input_detail {
    margin: 0;
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .isTitle,
  .isBody {
    > p {
      font-size: 11px;
      margin-top: 0;
      color: red;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  button {
    margin-right: 5px;
    width: fit-content;
  }
`;
const Create = () => {
  const [selected, setSelected] = useState(0);
  //질문 제목, 질문 바디 입력 Input
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const titleInputRef = useRef(null);
  // const bodyInputRef = useRef(null);

  //false -> 기본값 , true -> 통과되지 못함(red)
  const [isTitle, setIsTitle] = useState(false);
  const [isBody, setIsBody] = useState(false);

  const navigate = useNavigate();
  const titleHandler = () => {
    // let titleInputValue = titleInputRef.current.value;
    // setTitle(titleInputValue);

    //유효성 검사 : 제목 150자 이상 제한
    if (title.length > 150 || title.length < 15) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  const bodyHandler = () => {
    // let bodyInputValue = bodyInputRef.current.value;
    // setBody(bodyInputValue);

    //유효성 검사 : 바디 최소 20자 이상
    if (body.length < 20) {
      setIsBody(true);
    } else {
      setIsBody(false);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    titleHandler();
    bodyHandler();
  };

  useEffect(() => {
    const isValid = !isTitle && !isBody;
    if (isValid) {
      console.log("유효함");
      console.log(title, body);
    } else {
      console.log(isTitle ? "제목 문제" : "");
      console.log(isBody ? "본문 문제" : "");
    }
  }, [title, body]);
  // const navigate = useNavigate();

  //자기 자신은 로컬에 저장함
  // const currentUserId = localStorage.getItem("userId");

  // Register 클릭시 이벤트
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const URL = `${PROXY}/questions/create`;
  const hanldeRegister = (e) => {
    e.preventDefault();
    titleHandler();
    bodyHandler();
    // postData();

    const newData = {
      title,
      body,
      // userid: currentUserId,
    };

    axios
      .post(URL, newData, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
          Authorization: localStorage.getItem("Authorization"), //post 요청시 인증토큰 필요
        },
      })
      .then((res) => {
        console.log(res.data);
        const question_id = res.data.question.question_id;
        console.log(question_id);
        navigate(`/question/${question_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("/questions/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", //;charset=UTF-8",
    //     Authorization: localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify(newData),
    // })
    //   .then((res) => console.log(res))
    //   .then((data) => console.log(data));
    // axios
    //   .post("/questions/create", newData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // navigate('/questions/{id}'); //생성후 해당 질문 게시물 페이지로 이동
  };
  // Cancel 클릭시 이벤트
  const handleCancel = () => {
    navigate("/home"); //메인 게시물로 이동
  };

  const help = [
    {
      title: "Writing a good title",
      content: [
        "Your title should summarize the problem.",
        " You might find that you have a better idea of your title after writing out the rest of the question.",
      ],
    },
    {
      title: "Introduce the problem",
      content: [
        "  Explain how you encountered the problem you’retrying to solve, and any difficulties that have prevented you from solving it yourself.",
      ],
    },
  ];

  const inputBox = [
    {
      title: "Title",
      detail:
        "Be specific and imagine you’re asking a question to another person.",
    },
    {
      title: " What are the details of your problem?",
      detail:
        " Introduce the problem and expand on what you put in the  title. Minimum 20 characters.",
    },
  ];

  const alert = [
    "Title must be at least 15 characters.",
    "Body must be a t least 220 characters; you entered",
  ];

  return (
    <CreateDiv>
      <DivContainer>
        {/* 헤더 + 파란색 팁 박스 */}
        <HedaerSection>
          <h1>Ask a public question</h1>
          <CreateTip />
        </HedaerSection>

        {/* 메인 + 인풋 + 팁 박스 */}
        <MainSection>
          <FormContainer onSubmit={handleFormSubmit}>
            {/* 질문 제목 */}
            <FormWrapper onClick={() => setSelected(0)}>
              {/* 인풋 박스 */}
              <div className="input_container">
                <InputHeader
                  title={inputBox[0].title}
                  detail={inputBox[0].detail}
                />
                <div className="isTitle">
                  {/* <InputItem
                    isTitle={isTitle}
                    titleInputRef={titleInputRef}
                    alert={alert[0]}
                  /> */}
                  <InputItem
                    isTitle={isTitle}
                    value={title}
                    setValue={setTitle}
                    // titleInputRef={titleInputRef}
                    alert={alert[0]}
                  />
                </div>
              </div>

              {/* 팁 박스*/}
              {selected === 0 ? (
                <HelpItem title={help[0].title} content={help[0].content} />
              ) : null}
            </FormWrapper>

            {/* question */}
            <FormWrapper onClick={() => setSelected(1)}>
              <div className="input_container">
                <InputHeader
                  title={inputBox[1].title}
                  detail={inputBox[1].detail}
                />

                <div className="isBody">
                  {/* <TextareaItem
                    isBody={isBody}
                    bodyInputRef={bodyInputRef}
                    alert={alert[1]}
                  /> */}
                  <TextareaItem
                    isBody={isBody}
                    value={body}
                    setValue={setBody}
                    alert={alert[1]}
                  />
                </div>
              </div>
              {selected === 1 ? (
                <HelpItem title={help[1].title} content={help[1].content} />
              ) : null}
            </FormWrapper>

            {/* 버튼 */}
            <ButtonContainer>
              <Button type="submit" onClick={hanldeRegister}>
                Register
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </ButtonContainer>
            {/*  */}
          </FormContainer>
        </MainSection>
      </DivContainer>
    </CreateDiv>
  );
};

export default Create;
