import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../state";
import authenticate from "../utils/authenticate";

function NotFound() {
  const {
    user: { _id },
  } = useUserStore.getState();

  const validUser = _id && authenticate;
  const redirect = validUser ? `/user/${_id}` : "/login";
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <h1>404 Error!</h1>
      <h1>You look lost, click the button to get back to where you belong.</h1>
      <Link to={redirect} className="btn-style">
        back
      </Link>
    </div>
  );
}

export default NotFound;
