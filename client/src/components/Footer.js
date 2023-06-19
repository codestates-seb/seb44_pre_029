/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

//import { Link } from "react-router-dom";
import Footerlogo from "../assets/Stack_Overflow_icon.png";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #232629;
  color: #9099a1;
  display: flex;
  justify-content: flex-start;

  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 32px 12px 12px 12px;
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;
    > .logobox {
      flex: 0 0 64px;
      margin: -12px 0 32px 0;
    }

    .menu-container {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;

      > .ul {
        flex: 1 0 auto;
        padding: 0 12px 24px 0;
        > .h5 {
          margin-bottom: 12px;
          color: #babfc4;
          font-weight: bold;
          font-size: 13px;
        }
        > .li {
          line-height: 17px;
          font-size: 13px;
        }
      }
    }
    .sns-container {
      display: flex;
      flex-direction: column;
      flex: 1 1 150px;
      font-size: 11px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ul className="footer-container">
        <logobox className="logobox">
          <li className="foot-logo">
            {/* <Link to="/"></Link>
            <Footerlogo /> */}
            <img src={Footerlogo} alt="log" />
            <span className="/"></span>
          </li>
        </logobox>
        <li className="menu-container">
          <ul>
            <h5>STACK OVERFLOW</h5>
            <li>Quwstions</li>
            <li>Help</li>
          </ul>
          <ul>
            <h5>PRODUCTS</h5>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
          <ul>
            <h5>COMPANY</h5>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <h5>STACK EXCHANGE NETWORK</h5>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <br />
            <li>API</li>
            <li>Data</li>
          </ul>
        </li>
        <li className="sns-container">
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user
            <br /> contributions licensed under
            <span>
              <a>CC BY-SA</a>
            </span>
            . rev 2023.6.15.43499
          </p>
        </li>
      </ul>
    </FooterContainer>
  );
}

export default Footer;
