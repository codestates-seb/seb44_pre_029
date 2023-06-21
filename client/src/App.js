import "./App.css";
import HeaderLoginOn from "./components/HeaderLoginOn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Introduce from "./pages/Introduce";
import Mypage from "./pages/Mypage";
import Question from "./pages/Questions";
import EditQuestion from "./pages/EditQuestion";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderLoginOn />
        <main>
          <Routes>
            {/* 로그인 -> 초기*/}
            {/* <Route path="/" element={</>} />  */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/question" element={<Question />} />
            <Route path="/question/edit" element={<EditQuestion />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
