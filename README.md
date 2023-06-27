# StackoverFlow 클론코딩

- 팀명 : ```이구동성```
- 프로젝트 기간 : 2023.06.14 ~ 06.27
- 배포 링크 : https://seb44-pre-029.netlify.app/

</br>
</br>
</br>


# 🧑‍🤝‍🧑 팀 멤버


## FE
| 박효정  (팀장) |<a href="github.com/HyoJeong-Park">@HyoJeong-Park</a> |Mypage(Get), MypageEdit(Patch), Header |
|:--:|:--:|:--|
| 이예리 |<a href="github.com/yeeri">@yeeri</a>|Login(post, oauth), Footer |
| 정지원 |<a href="github.com/jeongjwon">@jeongjwon</a> | Signup(post, oauth), Create(post), Question List(get), Question Detail(get, patch), Vote(post), Aside, Nav |



## BE

| 남상욱 (부팀장) |<a href="github.com/nkower">@nkower</a>|Jwt, Login, Oauth2, Signup |
|:--:|:--:|:--|
| 김수민 | <a href="github.com/soomni95">@soomni95</a> |Question, Answer, CRUD, AWS deployment |
| 이현수 |<a href="github.com/gustn5309">@gustn5309</a>| User, Like CRUD, mypage 작성한 게시글 불러오기, mainpage 전체글 불러오기, 최신순정렬 |



</br>
</br>
</br>


# ⚙️ 기술 스택
## FE 
- Javascript
- react
- react-router-dom
- react-icons
- Styled-components
- axios
- eslint
- prettier
- figma
- 
## BE
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT
- Java
- H2


## 배포
- Netlify
- AWS EC2
- Ngrok

## Tools
- Github
- Discord
- Notion
- Zoom
- Postman

  
</br></br></br>


# 사용자 요구사항 정의서
https://www.notion.so/codestates/465f812b0fd644e3b15d80c5d71e069f

# API 명세서
https://www.notion.so/codestates/f895c8a9534a4e658bbc61f7c484dfa3?v=c34383aa8e6a4b58b5596ab07b3a9730

# ERD
https://www.erdcloud.com/d/nADwZmabdvGwnsYsu

## 화면 정의서
https://www.figma.com/file/Bye9MF24Ir79tJVKNHIaf2/%ED%99%94%EB%A9%B4-%EC%A0%95%EC%9D%98%EC%84%9C?type=design&mode=design&t=ff7fbZjtfbCtbfeh-0


# 깃 규칙
## 깃 커밋 컨벤션
| 메시지 | 설명 |
| --- | --- |
| ```feat``` | 새로운 기능 추가 |
| ```fix``` | 버그 수정 |
| ```refactor``` | 코드 리팩토링 |
| ```style``` | 코드 포맷팅, 세미콜론 누락, 코드 스타일 변경 |
| ```remove``` | 사용하지 않는 파일 또는 폴더 삭제 |
| ```rename``` | 파일 또는 폴더명 수정 |
| ```test``` | 테스트 코드, 리펙토링 테스트 코드 추가 |
| ```docs``` | 문서명 수정 |
| ```chore``` | 빌드 업무 수정, 패키지 매니저 수정 |

## 브랜치
| 브랜치명 | 설명 |  |
| --- | --- | --- |
| ```main``` | 최종 | 배포할 브랜치 |
| ```dev``` | 머지 | 코드 리뷰 후 merge |
| ```feat/front/기능``` | 프론트엔드 기능 구현 브랜치 | 개발 완료 후 dev 로 PR 전송 |
| ```feat/back/기능``` | 백엔드 기능 구현 브랜치 | 개발 완료 후 dev 로 PR 전송 |
