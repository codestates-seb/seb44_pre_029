//CreateContent.js
import styled from "styled-components";
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
export const TextEl = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
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
/* eslint-disable react/prop-types */
// react/prop-types 해결 주석
const InputItem = ({ isTitle, titleInputRef, alert }) => {
  return (
    <>
      {isTitle ? (
        <>
          <InputEl
            border="1px solid red"
            shadow="0 0 0 4px #f0c0bd"
            focusborder="1px solid red"
            type="text"
            ref={titleInputRef}
            placeholder="e.g Is there an R function for finding the index of an element in a vector?"
          />
          <p>{alert}</p>
        </>
      ) : (
        <>
          <InputEl
            border="1px solid #b0b8bf"
            shadow="0 0 0 4px #ddeaf7"
            focusborder="1px solid #0a95ff"
            type="text"
            ref={titleInputRef}
            placeholder="e.g Is there an R function for finding the index of an element in a vector?"
          />
        </>
      )}
    </>
  );
};

const TextareaItem = ({ isBody, bodyInputRef, alert }) => {
  return (
    <>
      {isBody ? (
        <>
          <TextEl
            type="text"
            border="1px solid red"
            shadow="0 0 0 4px #f0c0bd"
            focusborder="1px solid red"
            ref={bodyInputRef}
            placeholder="e.g Is there an R function for finding the index of an element in a vector?"
          />
          <p>
            {alert}
            {bodyInputRef.current.value.length}.
          </p>
        </>
      ) : (
        <>
          <TextEl
            type="text"
            border="1px solid #b0b8bf"
            shadow="0 0 0 4px #ddeaf7"
            focusborder="1px solid #0a95ff"
            ref={bodyInputRef}
            // placeholder="e.g Is there an R function for finding the index of an element in a vector?"
          />
        </>
      )}
    </>
  );
};

export { InputItem, TextareaItem };
