import "./App.css";
import HeaderLogin from "./components/HeaderLogin";
import HeaderLogout from "./components/HeaderLogout";
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
import EditQuestion from "./pages/EditQuestion";
import { useState, useEffect } from "react";

function App() {
  console.log(localStorage.getItem("Authorization") !== null);
  const [storage, setStorage] = useState(null);
  useEffect(() => {
    setStorage(localStorage.getItem("Authorization"));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {storage !== null ? <HeaderLogin /> : <HeaderLogout />}
        <main>
          {storage !== null ? <Nav /> : ""}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/questions/create" element={<Create />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/mypage/:userId" element={<Mypage />} />
            <Route path="/question/:questionId" element={<Question />} />
            <Route path="/mypage/edit/:userId" element={<MypageEdit />} />
            <Route
              path="/question/edit/:questionId"
              element={<EditQuestion />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
