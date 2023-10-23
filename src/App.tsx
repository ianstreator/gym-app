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
  const logoSize = 150;

  const HomeLayout = () => (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="z-10 p-8 w-[400px] h-[660px] flex flex-col justify-between items-center">
        <img
          src="/const-logo.png"
          alt="logo"
          width={logoSize}
          height={logoSize}
        />
        <Outlet />
      </div>
      <div className="background z-0 w-screen h-screen absolute"></div>
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
