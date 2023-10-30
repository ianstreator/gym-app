import { create } from "zustand";
import { Types } from "@constfitness/types";

type UserStoreState = {
  user: Types.User;
  setUser: (userFields: Partial<Types.User>) => void;
};

export const useUserStore = create<UserStoreState>()((set) => ({
  user: {
    email: "",
    username: "",
    _id: "",
    schedule: {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    },
  },
  setUser: (userFields) => set((state) => ({ ...state, ...userFields })),
}));
