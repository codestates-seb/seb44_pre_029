import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import EditTip from "../components/EditTip";
import EditForm from "../components/EditForm";
import Nav from "../components/Nav";
import HeaderLogin from "../components/HeaderLogin";
export const EditConatiner = styled.main`
  display: flex;
  padding: 24px;
  gap: 1rem;
`;

export const BodyContainer = styled.div``;

const EditQuestion = () => {
  //!! 기존의 게시물 페이지에서 게시물의 제목과 바디를 가져와
  //   EditForm 에 props 로 전달

  const { questionId } = useParams();

  return (
    <>
      <header>
        <HeaderLogin />
      </header>
      <main>
        <Nav />
        <EditConatiner>
          <EditForm questionId={questionId} />
          <EditTip />
        </EditConatiner>
      </main>
    </>
  );
};

export default EditQuestion;
