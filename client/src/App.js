import "./App.css";
import HeaderLogin from "./components/HeaderLogin";
// import HeaderLogout from "./components/HeaderLogout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Introduce from "./pages/Introduce";
import Mypage from "./pages/Mypage";
import Question from "./pages/Questions";
import Login from "./pages/Login";
import MypageEdit from "./pages/MypageEdit";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderLogin />
        {/* 로그인 X 경우에는 Logout 컴포넌트로 */}
        <main>
          <Nav />
          <Routes>
            {/* 로그인 -> 초기*/}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/question" element={<Question />} />
            <Route path="/mypage/edit" element={<MypageEdit />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
