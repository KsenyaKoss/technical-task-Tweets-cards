import { createSelector } from "@reduxjs/toolkit";
import { selectUsers } from "../users/selectors";

export const selectFilter = (state) => state.filter;

export const selectUsersByOption = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case "show all":
        return users;
      case "follow":
        return users.filter((user) => !user.isSubscribe);
      case "following":
        return users.filter((user) => user.isSubscribe);
      default:
        break;
    }
  }
);

