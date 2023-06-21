import { useState, useEffect, useRef } from "react";
import { Button } from "./Signup";
import { InputItem, TextareaItem } from "../components/CreateContent";
import { ButtonContainer } from "./Create";
import { styled } from "styled-components";
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
const EditForm = () => {
  //질문 제목, 질문 바디 입력 Input
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);
  //false -> 기본값 , true -> 통과되지 못함(red)
  const [isTitle, setIsTitle] = useState(false);
  const [isBody, setIsBody] = useState(false);

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

  const titleHandler = () => {
    let titleInputValue = titleInputRef.current.value;
    setTitle(titleInputValue);

    //유효성 검사 : 제목 150자 이상 제한
    if (titleInputValue.length > 150 || titleInputValue.length < 15) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  const bodyHandler = () => {
    let bodyInputValue = bodyInputRef.current.value;
    setBody(bodyInputValue);

    //유효성 검사 : 바디 최소 20자 이상
    if (bodyInputValue.length < 20) {
      setIsBody(true);
    } else {
      setIsBody(false);
    }
  };
  const hanldeSaveEdit = (e) => {
    e.preventDefault();
    titleHandler();
    bodyHandler();
    // navigate() 해당 게시물로
  };
  const alert = [
    "Title must be at least 15 characters.",
    "Body must be a t least 220 characters; you entered",
  ];
  return (
    <FormContainer>
      {/* 질문 제목 */}

      <InputContainer>
        {/* 인풋 박스 */}
        <h3>Title</h3>
        <InputItem
          isTitle={isTitle}
          titleInputRef={titleInputRef}
          alert={alert[0]}
        />
        <h3>Body</h3>
        <TextareaItem
          isBody={isBody}
          bodyInputRef={bodyInputRef}
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
