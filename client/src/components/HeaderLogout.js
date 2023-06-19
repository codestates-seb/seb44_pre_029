import { styled } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBoxModal from "./SearchBoxModal";
import { useState } from "react";

const HeaderLogout = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchFocus = () => {
    setIsFocused(!isFocused);
  };

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

    div.menu {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }

    div.menu:hover {
      cursor: pointer;
      background-color: #eee;
    }

    div.searchBoxWrap {
      position: relative;
    }

    .searchFocus {
      outline: 0.5px solid #0eb4fc;
      box-shadow: 0 0 0 6px rgb(184, 223, 248, 0.4);
      border-radius: 2px;
    }

    .hide {
      display: none;
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
    width: 670px;
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

  const LoginBtn = styled.button`
    background-color: #e1ecf4;
    border: 1px solid #bbd2e1;
    color: #39739d;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    margin: 0 10px;

    &:hover {
      background-color: #b5d1e5;
      cursor: pointer;
    }
  `;

  const SignupBtn = styled(LoginBtn)`
    background-color: #0a95ff;
    border: 1px solid #81c5ff;
    color: #fff;

    &:hover {
      background-color: #007ad8;
      cursor: pointer;
    }
  `;

  return (
    <Header>
      <HeaderWrap>
        <div className="menu">
          <GiHamburgerMenu />
        </div>
        <Mainlogo href="#">
          <span></span>
        </Mainlogo>
        <ProductBtn>About</ProductBtn>
        <div className="searchBoxWrap">
          <SearchBox
            type="text"
            placeholder="Search..."
            onFocus={handleSearchFocus}
            onBlur={handleSearchFocus}
            className={isFocused ? "searchFocus" : ""}
          />
          <SerachBoxIcon>
            <HiMagnifyingGlass size={20} />
          </SerachBoxIcon>
          <SearchBoxModal isFocused={isFocused} />
        </div>
        <LoginBtn>Log In</LoginBtn>
        <SignupBtn>Sign Up</SignupBtn>
      </HeaderWrap>
    </Header>
  );
};

export default HeaderLogout;
