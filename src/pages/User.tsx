import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../state";
import { Types } from "@constfitness/types";

function User() {
  const navigate = useNavigate();
  const user = useUserStore.getState().user;
  const {_id, schedule} = user
  useEffect(() => {
    console.log(_id, user)
    if (!_id) navigate("/login");
    console.log(schedule);
    const scheduleObject = Object.entries(schedule).reduce(
      (schedule: { [day: string]: Types.Activity[] }, [day, workout]) => {
        if (workout.length) {
          schedule[day] = workout;
          return schedule;
        }
        return schedule;
      },
      {}
    );
    console.log(scheduleObject);
    if (!Object.values(scheduleObject).length) {
      console.log(_id);
      navigate(`/user/${_id}/schedule`);
    }
  }, []);
  return <div>User</div>;
}

export default User;
