import Aside from "../components/Aside";
import QuestionList from "../components/QuestionList";
import styled from "styled-components";
import { useEffect, useState } from "react";
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
  const [allData, setAllData] = useState([]);
  //전체게시물 조회
  useEffect(() => {
    axios
      .get("/questions?page=1&size=10", {
        // headers: {
        //   "ngrok-skip-browser-warning": "69420",
        // },
        // withCredentials: true,
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        // console.log(res);
        setAllData(res.data.data);
      })
      //여기서의 데이터를 QuestionsList 로 props 전달
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  }, []);
  return (
    <MainContainer>
      <div className="questions">
        <QuestionList data={allData} />
      </div>
      <div>
        <Aside />
      </div>
    </MainContainer>
  );
};

export default Home;
