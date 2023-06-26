//setupProxy.js
/*eslint-env node*/
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //로그인
  app.use(
    "/login",
    createProxyMiddleware({
      target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
    }),
  );
  //회원가입 -> 상욱님, 마이페이지 정보 조회
  app.use(
    "/users",
    createProxyMiddleware({
      target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
    }),
  ),
    app.use(
      "/oauth2/authorization/google",
      createProxyMiddleware({
        target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
      }),
    ),
    //글 작성 -> 수민님
    app.use(
      "/questions/add",
      createProxyMiddleware({
        target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
      }),
    ),
    // 게시물 불러오기 questions -> 수민님
    app.use(
      "/questions",
      createProxyMiddleware({
        target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
      }),
    ),
    // 게시물 불러오기 questions/edit -> 수민님
    app.use(
      "/questions/edit",
      createProxyMiddleware({
        target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
      }),
    ),
    // 메인 페이지 전체 게시물 불러오기 -> 현수님
    app.use(
      "/questions?page=1&size=10",
      createProxyMiddleware({
        target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
      }),
    ),
    // 마이페이지 수정 -> 현수님 
  app.use(
    "/users/edit",
    createProxyMiddleware({
      target: "http://ec2-3-34-52-125.ap-northeast-2.compute.amazonaws.com:8080", //타겟이 되는 api url를 입력합니다.
      changeOrigin: true,
    }),
  );
};
