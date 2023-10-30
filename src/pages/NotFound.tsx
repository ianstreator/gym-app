import { Link } from "react-router-dom";
import { useUserStore } from "../state";
// import authenticate from "../utils/authenticate";

function NotFound() {
  const {
    user: { _id },
  } = useUserStore.getState();

  const validUser = _id;
  const redirect = validUser ? `/user/${_id}` : "/login";
  return (
    <div className="p-10 flex flex-col items-center text-center justify-center">
      <h1 className="font-bold text-2xl pb-4">Error 404 page not found</h1>
      <p className="text-7xl">🕵️👮‍♂️</p>
      <Link to={redirect} className="btn-style">
        police line do not cross 
      </Link>
    </div>
  );
}

export default NotFound;
