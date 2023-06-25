//CreateTip.js
import { styled } from "styled-components";

export const TipSection = styled.section`
  display: flex;
`;
export const TipContainer = styled.div`
  border: 1px solid #81c5ff;
  background-color: #e1ecf4;
  border-radius: 5px;
  text-align: left;
  padding: 24px;
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin-top: 0;
  }
  p {
    margin: 0;
    font-size: 15px;
    line-height: 20px;
  }
  p:nth-child(1) {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: inherit;
    color: #0074cc;

    cursor: pointer;
    &:hover {
      color: #0a95ff;
    }
  }
  h5 {
    font-weight: 600;
    margin-bottom: 8px;
  }
  ul {
    padding: 0;
    margin: 0;
    margin-left: 30px;
    list-style-type: disc;
    > li {
      font-size: 13px;
      line-height: 16px;
    }
  }
`;

const CreateTip = () => {
  const steps = [
    "Summarize your problem in a one-line title.",
    "Describe your problem in more detail.",
    "Describe what you tried and what you expected to happen.",
    "Add “tags” which help surface your question to members of the community.",
    "Review your question and post it to the site.",
  ];
  return (
    <TipSection>
      <TipContainer>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to{" "}
          <a href="https://stackoverflow.com/help/how-to-ask">ask</a> a{" "}
          <a href="https://stackoverflow.com/help/on-topic">
            programming-related question
          </a>{" "}
          and this form will help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See{" "}
          <a href="https://stackexchange.com/sites#technology-traffic">
            the topics here
          </a>{" "}
          to find a relevant site.
        </p>
        <h5>Steps</h5>
        <ul>
          {steps.map((el, idx) => {
            return <li key={idx}>{el}</li>;
          })}
        </ul>
      </TipContainer>
    </TipSection>
  );
};

export default CreateTip;
