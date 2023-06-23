import { styled } from "styled-components";
import EditTip from "../components/EditTip";
import EditForm from "../components/EditForm";
import {
  // useState,
  useEffect,
} from "react";
import axios from "axios";
export const EditConatiner = styled.main`
  display: flex;
  padding: 24px;
  gap: 1rem;
`;

export const BodyContainer = styled.div``;

const EditQuestion = () => {
  //!! 기존의 게시물 페이지에서 게시물의 제목과 바디를 가져와
  //   EditForm 에 props 로 전달
  // const [editData, setEditData] = useState([]);
  useEffect(() => {
    axios.get("/questions/1").then((res) => console.log(res));
  }, []);
  return (
    <>
      <EditConatiner>
        <EditForm />
        <EditTip />
      </EditConatiner>
    </>
  );
};

export default EditQuestion;
