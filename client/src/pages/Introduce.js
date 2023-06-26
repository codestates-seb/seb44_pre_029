import styled from "styled-components";
import Zzanggu from "../assets/Zzanggu.png";

const IntroduceWrap = styled.div`
  padding: 20px;
  width: 1082px;
  h1 {
    text-align: left;
  }
  div.introWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const IntroduceContent = styled.div`
  width: 260px;
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 5px 0 #ccc;
  span.githubTag {
    color: #aaa;
    font-size: 12px;
    padding: 0 5px;
  }
`;
const Introduce = () => {
  return (
    <IntroduceWrap>
      <div>
        <h1>Front</h1>
        <div className="introWrap">
          <IntroduceContent>
            <img src={Zzanggu} alt="Zzanggu" />
            <p>[FE] 박효정</p>
            <span className="githubTag">Github</span>
            <span>HyoJeong-Park</span>
          </IntroduceContent>
          <IntroduceContent>
            <img src={Zzanggu} alt="Zzanggu" />
            <p>[FE] 정지원</p>
            <span className="githubTag">Github</span>
            <span>Jeongjwon</span>
          </IntroduceContent>
          <IntroduceContent>
            <img src={Zzanggu} alt="Zzanggu" />
            <p>[FE] 이예리</p>
            <span className="githubTag">Github</span>
            <span>Yeeri</span>
          </IntroduceContent>
        </div>
      </div>
      <div>
        <h1>Back</h1>
        <div className="introWrap">
          <IntroduceContent>
            <img src={Zzanggu} alt="Zzanggu" />
            <p>[FE] 이현수</p>
            <span className="githubTag">Github</span>
            <span>gustn5309</span>
          </IntroduceContent>
          <IntroduceContent>
            <img src={Zzanggu} alt="Zzanggu" />
            <p>[FE] 김수민</p>
            <span className="githubTag">Github</span>
            <span>soomni95</span>
          </IntroduceContent>
          <IntroduceContent>
            <img src={Zzanggu} alt="Zzanggu" />
            <p>[FE] 남상욱</p>
            <span className="githubTag">Github</span>
            <span>nkower</span>
          </IntroduceContent>
        </div>
      </div>
    </IntroduceWrap>
  );
};

export default Introduce;
