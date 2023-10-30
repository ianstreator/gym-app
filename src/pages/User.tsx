import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../state";
import { Types } from "@constfitness/types";

function User() {
  const navigate = useNavigate();
  const user = useUserStore.getState().user;
  useEffect(() => {
    console.log(user.schedule);
    const schedule = Object.entries(user.schedule).reduce(
      (schedule: { [day: string]: Types.Activity[] }, [day, workout]) => {
        if (workout.length) {
          schedule[day] = workout;
          return schedule;
        }
        return schedule;
      },
      {}
    );
    console.log(schedule);
    if (!Object.values(schedule).length) {
      navigate(`/user/${user._id}/schedule`);
    }
  }, []);
  return <div>User</div>;
}

export default User;
