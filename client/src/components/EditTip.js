import { styled } from "styled-components";
export const EditTipContainer = styled.div`
  width: 300px;
  color: #232629;
  text-align: left;
  border: 1px solid #f3eac7;
  background-color: #fdf8e3;
  border-radius: 5px;
  height: fit-content;
`;

export const EditTitle = styled.div`
  font-size: 13px;
  padding: 12px 15px;
  border-bottom: 1px solid #f3eac7;
  background-color: #fcf3d5;
  font-weight: bold;
  color: #535961;
  text-align: left;
`;
export const EditContent = styled.ul`
  background-color: #fdf8e3;
  padding: 0 20px;
  margin: 12px 12px;

  > li {
    font-size: 11px;
    margin: 12px 0;
    list-style: disc;
    color: #232629;
  }
`;
const EditTip = () => {
  return (
    <EditTipContainer>
      <EditTitle>How to Edit</EditTitle>
      <EditContent>
        <li>Correct minor typos or mistakes</li>
        <li>Clarify meaning without changing it</li>
        <li>Add related resource or links</li>
        <li>Always respect the authors intent`</li>
        <li>Dont use edits to reply to the author</li>
      </EditContent>
    </EditTipContainer>
  );
};
export default EditTip;
