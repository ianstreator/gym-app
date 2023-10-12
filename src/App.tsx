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

function App() {
  const logoSize = 150;

  const HomeLayout = () => (
    <div className="p-10 pt-0 h-screen max-w-md text-bone flex flex-col items-center">
      <img
        src="/const-logo.png"
        alt="logo"
        width={logoSize}
        height={logoSize}
      />
      <Outlet />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />

    </Router>
  );
}

export default App;
