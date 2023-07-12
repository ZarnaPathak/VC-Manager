import { CreateMember } from "./components/CreateMember";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addMember" element={<CreateMember />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
