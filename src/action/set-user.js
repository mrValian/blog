import { ACTION_TYPE } from "./constans";

export const setUser = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user,
});
