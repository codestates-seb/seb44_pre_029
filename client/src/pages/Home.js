import Aside from "../components/Aside";
import QuestionList from "../components/QuestionList";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
export const MainContainer = styled.div`
  display: flex;

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
  //전체게시물 조회
  useEffect(() => {
    axios
      .get("/questions?page=1&size=10", {
        // headers: {
        //   "ngrok-skip-browser-warning": "69420",
        // },
        // withCredentials: true,
        // credentials: "include",
      })
      .then((res) => console.log(res))
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  }, []);
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
