//InputHeader.js
import { styled } from "styled-components";
export const Title = styled.div`
  font-weight: 600;
`;
export const Detail = styled.div`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 8px;
`;
/* eslint-disable react/prop-types */
const InputHeader = ({ title, detail }) => {
  return (
    <>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
    </>
  );
};

export default InputHeader;
