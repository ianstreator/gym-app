import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify";

function App() {
  const logoSize = 100;

  const HomeLayout = () => (
    <div className="background w-screen h-screen flex flex-col items-center">
      <div className="p-8 pt-0 h-screen max-w-md flex flex-col items-center">
        <img
          src="/const-logo.png"
          alt="logo"
          width={logoSize}
          height={logoSize}
        />
        <div className="m-2 p-10 w-[300px] h-[500px] bg-black/20 backdrop-blur-sm shadow-md rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
        </Route>
      </Routes>
      <ToastContainer theme="dark" limit={2} />
    </Router>
  );
}

export default App;
