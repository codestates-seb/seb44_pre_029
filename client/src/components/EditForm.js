import { useState, useEffect } from "react";
import { Button } from "../pages/Signup";
import { InputItem, TextareaItem } from "./CreateContent";
import { ButtonContainer } from "../pages/Create";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
export const InputContainer = styled.div`
  > h3 {
    margin: 0;
  }
  > input {
    width: 100%;
  }
  > p {
    font-size: 11px;
    margin-top: 0;
    color: red;
  }
`;
const EditForm = ({ questionId }) => {
  //질문 제목, 질문 바디 입력 Input
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const titleInputRef = useRef(null);
  // const bodyInputRef = useRef(null);
  //false -> 기본값 , true -> 통과되지 못함(red)
  const [isTitle, setIsTitle] = useState(false);
  const [isBody, setIsBody] = useState(false);

  useEffect(() => {
    axios
      .get(`/questions/${questionId}`, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: localStorage.getItem("Authorization"), //post 요청시 인증토큰 필요
        },
      })
      .then((res) => {
        // console.log(res.data);

        setTitle(res.data.question.title);
        setBody(res.data.question.body);
      });
  }, []);

  useEffect(() => {
    const isValid = !isTitle && !isBody;
    if (isValid) {
      console.log("유효함");
      // console.log(title, body);
    } else {
      // console.log(isTitle ? "제목 문제" : "");
      // console.log(isBody ? "본문 문제" : "");
    }
  }, [title, body]);

  const titleHandler = () => {
    //유효성 검사 : 제목 150자 이상 제한
    if (title.length > 150 || title.length < 15) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  const bodyHandler = () => {
    //유효성 검사 : 바디 최소 20자 이상
    if (body.length < 20) {
      setIsBody(true);
    } else {
      setIsBody(false);
    }
  };
  const navigate = useNavigate();
  const hanldeSaveEdit = (e) => {
    e.preventDefault();
    titleHandler();
    bodyHandler();
    const newData = {
      questionId,
      title,
      body,
    };
    axios
      .patch(`/questions/${questionId}/edit`, newData, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: localStorage.getItem("Authorization"), //post 요청시 인증토큰 필요
        },
      })
      .then((res) => console.log(res));
    // axios
    //   .post(`/questions/edit/${questionId}`, newData, {
    //     headers: {
    //       //       // "Content-Type": "application/json",
    //       Authorization: localStorage.getItem("Authorization"), //post 요청시 인증토큰 필요
    //     },
    //   })
    //   .then((res) => console.log(res));
    navigate(`/question/${questionId}`);

    // navigate() 해당 게시물로
  };
  // const alert = [
  //   "Title must be at least 15 characters.",
  //   "Body must be a t least 220 characters; you entered",
  // ];
  return (
    <FormContainer>
      {/* 질문 제목 */}

      <InputContainer>
        {/* 인풋 박스 */}
        <h3>Title</h3>
        {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
        <InputItem
          isTitle={isTitle}
          value={title}
          setValue={setTitle}
          // titleInputRef={titleInputRef}
          alert={alert[0]}
          type="text"
        />
        <h3>Body</h3>
        {/* <textarea value={body} onChange={(e) => setBody(e.target.value)} /> */}
        <TextareaItem
          isBody={isBody}
          value={body}
          setValue={setBody}
          alert={alert[1]}
        />
      </InputContainer>

      {/* 버튼 */}
      <ButtonContainer>
        <Button type="submit" onClick={hanldeSaveEdit}>
          Save edits
        </Button>
        <Button>Cancel</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default EditForm;
