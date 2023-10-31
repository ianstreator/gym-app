import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserStore } from "./state";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import Schedule from "./pages/Schedule";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  const logoSize = 150;
  const HomeLayout = () => (
    <div className="w-full h-full flex flex-col items-center">
      <div className="z-10 p-8 w-[400px] h-[660px] flex flex-col justify-between items-center">
        <img
          src="/const-logo.png"
          alt="logo"
          width={logoSize}
          height={logoSize}
        />
        <div className="py-4 w-[260px] h-full">
          <Outlet />
        </div>
      </div>
      <div className="background z-0 w-full h-full absolute"></div>
    </div>
  );

  const AppLayout = () => (
    <div className="w-screen md:w-[800px] h-screen flex flex-col">
      <nav className="p-4 flex w-full bg-black/25">
        <h1 className="font-bold">{useUserStore.getState().user.username}</h1>
      </nav>
      <div className="p-16 h-full">
        <Outlet />
      </div>
    </div>
  );

  const FocusLayout = () => (
    <div className="w-screen md:w-[800px] h-screen flex flex-col">
      <div className="p-20 h-full">
        <Outlet />
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
        <Route path="/user/:id" element={<AppLayout />}>
          <Route path="/user/:id" element={<User />} />
        </Route>
        <Route path="/user/:id" element={<FocusLayout />}>
          <Route path="/user/:id/schedule" element={<Schedule />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer theme="dark" limit={2} />
    </Router>
  );
}

export default App;
