import Aside from "../components/Aside";
import QuestionList from "../components/QuestionList";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;

  > div:first-child {
    width: 100%;
  }
  > div:last-child {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const Home = () => {
  return (
    <MainContainer>
      <div className="questions">
        <QuestionList />
      </div>
      <div>
        <Aside />
      </div>
    </MainContainer>
  );
};

export default Home;
