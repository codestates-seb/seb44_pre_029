import styled from "styled-components";

import { Link } from "react-router-dom";
import { ReactComponent as Footerlogo } from "../assets/Stack_Overflow_icon.png";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #232629;
  color: #9099a1;
`;

function Footer() {
  return (
    <FooterContainer>
      <ul className="footer-container">
        <logobox className="logobox">
          <li className="foot-logo">
            <Link to="/"></Link>
            <Footerlogo />
            <span className="/"></span>
          </li>
        </logobox>
        <li className="menu-container">
          <ul>
            <h5>STACK OVERFLOW</h5>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Contact Us</li>
            <li>Questions</li>
          </ul>
          <ul>
            <h5>PRODUCTS</h5>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
          <ul>
            <h5>POLICIES</h5>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <h5>CHANNELS</h5>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </li>
      </ul>
    </FooterContainer>
  );
}

export default Footer;
