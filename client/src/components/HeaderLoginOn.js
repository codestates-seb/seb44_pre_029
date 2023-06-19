import { styled } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsPersonCircle } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const Header = styled.header`
    width: 100%;
    border-top: 2px solid #ef8236;
    border-bottom: 1px solid #ccc;
  `;

  const HeaderWrap = styled.div`
    width: 1260px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    div.searchBoxWrap {
      position: relative;
    }
  `;

  const Mainlogo = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    &:hover {
      background-color: #eee;
    }

    span {
      background-image: url("https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27");
      background-repeat: no-repeat;
      background-size: cover;
      width: 150px;
      height: 100%;
    }
  `;

  const ProductBtn = styled.span`
    color: #777;
    padding: 5px 12px;

    &:hover {
      background-color: #eee;
      border-radius: 20px;
      cursor: pointer;
    }
  `;

  const SearchBox = styled.input`
    border: 1px solid #ccc;
    padding: 7px 10px 7px 32px;
    width: 730px;
    margin: 0 10px;
    border-radius: 2px;

    &:focus {
      outline: 0.5px solid #0eb4fc;
      box-shadow: 0 0 0 6px rgb(184, 223, 248, 0.4);
      border-radius: 2px;
    }
  `;

  const SerachBoxIcon = styled.span`
    position: absolute;
    top: 5px;
    left: 15px;
    color: #888;
  `;

  const IconsBtnWrap = styled.ul`
    list-style: none;
    display: flex;
    height: 100%;
    padding: 0;
    line-height: 55px;
  `;

  const IconsBtn = styled.li`
    height: 100%;
    display: inline-block;
  `;

  const IconBtnA = styled.a`
    display: block;
    padding: 0 10px;
    height: 100%;
    position: relative;

    &:hover {
      cursor: pointer;
      background-color: #eee;
    }

    span.reputationCount {
      display: inline-block;
      line-height: 20px;
      font-size: 14px;
      margin-left: 2px;
    }

    path {
      color: #666;
    }

    &:hover path {
      color: #333;
    }
  `;

  // 로그아웃 모달은 리덕스 껴서 해야할 거 같아요.
  // const Logout = styled.div`
  //   background-color: pink;
  //   width: 200px;
  //   height: 200px;
  // `;

  // const handleLogout = () => {

  // };

  return (
    <Header>
      <HeaderWrap>
        <Mainlogo href="#">
          <span></span>
        </Mainlogo>
        <ProductBtn>About</ProductBtn>
        <div className="searchBoxWrap">
          <SearchBox type="text" placeholder="Search..." />
          <SerachBoxIcon>
            <HiMagnifyingGlass size={20} />
          </SerachBoxIcon>
        </div>
        <IconsBtnWrap>
          <IconsBtn>
            <IconBtnA>
              <BsPersonCircle size={20} />
              <span className="reputationCount">1</span>
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <FaInbox size={20} />
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <AiFillTrophy size={20} />
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <AiFillQuestionCircle size={20} />
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <GiHamburgerMenu size={20} />
            </IconBtnA>
          </IconsBtn>
        </IconsBtnWrap>
      </HeaderWrap>
    </Header>
  );
};

export default Header;
