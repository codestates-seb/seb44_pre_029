//HelpItem.js
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
export const HelpContainer = styled.div`
  /* position: absolute; */
  width: 350px;
`;
export const HelpBanner = styled.div`
  border: 1px solid #d5d9db;
  background-color: #ffffff;
  /* border-radius: 3px; */
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
export const HelpTitle = styled.div`
  background-color: #f8f9f9;
  border-bottom: 1px solid #d5d9db;
  font-weight: bold;
  color: #535961;
  text-align: left;
  font-size: 13px;
  padding: 12px 15px;
`;
export const HelpContent = styled.div`
  display: flex;
  font-size: 13px;
  gap: 1rem;
  background-color: #ffffff;
  margin: 16px;

  p {
    margin-top: 0;
    text-align: left;
    line-height: 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
/* eslint-disable react/prop-types */
const HelpItem = ({ title, content }) => {
  return (
    <HelpContainer>
      <HelpBanner>
        <ul>
          <HelpTitle>{title}</HelpTitle>
          <HelpContent>
            <div>
              <FontAwesomeIcon icon={faPen} size="3x" />
            </div>
            <div>
              {content.map((el, idx) => {
                return <p key={idx}>{el}</p>;
              })}
            </div>
          </HelpContent>
        </ul>
      </HelpBanner>
    </HelpContainer>
  );
};

export default HelpItem;
