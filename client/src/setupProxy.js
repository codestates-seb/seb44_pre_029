//setupProxy.js
/*eslint-env node*/
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //로그인
  app.use(
    "/login",
    createProxyMiddleware({
      target: "https://beef-121-160-105-82.ngrok-free.app/ ",
      changeOrigin: true,
    }),
  );
  //회원가입 -> 상욱님
  app.use(
    "/users",
    createProxyMiddleware({
      target: "https://beef-121-160-105-82.ngrok-free.app",
      changeOrigin: true,
    }),
  ),
    app.use(
      "/oauth2/authorization/google",
      createProxyMiddleware({
        target: "https://beef-121-160-105-82.ngrok-free.app",
        changeOrigin: true,
      }),
    ),
    //글 작성 -> 수민님
    app.use(
      "/questions/add",
      createProxyMiddleware({
        target: "https://d626-121-187-22-182.ngrok-free.app",
        changeOrigin: true,
      }),
    ),
    // 게시물 불러오기 questions -> 수민님
    app.use(
      "/questions",
      createProxyMiddleware({
        target: "https://d626-121-187-22-182.ngrok-free.app",
        changeOrigin: true,
      }),
    ),
    // 게시물 불러오기 questions/eidt -> 수민님
    app.use(
      "/questions/edit",
      createProxyMiddleware({
        target: "https://d626-121-187-22-182.ngrok-free.app",
        changeOrigin: true,
      }),
    ),
    // 메인 페이지 전체 게시물 불러오기 -> 현수님
    app.use(
      "/questions?page=1&size=10",
      createProxyMiddleware({
        target: "https://d626-121-187-22-182.ngrok-free.app",
        changeOrigin: true,
      }),
    ),
    // 마이페이지 - 현수님
    app.use(
      "/mypage",
      createProxyMiddleware({
        target: "https://d626-121-187-22-182.ngrok-free.app", //타겟이 되는 api url를 입력합니다.
        changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
      }),
    );
  app.use(
    "/mypage/eidt",
    createProxyMiddleware({
      target: "https://d626-121-187-22-182.ngrok-free.app", //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    }),
  );
  // app.use(
  //   "/token",
  //   createProxyMiddleware({
  //     target: "https://oauth2.googleapis.com", //타겟이 되는 api url를 입력합니다.
  //     changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
  //   }),
  // );
  // app.use(
  //   "/token",
  //   createProxyMiddleware({
  //     target: "https://oauth2.googleapis.com",
  //     changeOrigin: true,
  //   }),
  // );
};
