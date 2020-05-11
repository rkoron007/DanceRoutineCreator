import { handleResponseJSON, makePostRequest, deleteRequest } from "./util";

export const signUp = (user) =>
  makePostRequest("/api/users", { user })
    .then((response) => handleResponseJSON(response))
    .then((data) => data);

export const signIn = (user) =>
  makePostRequest("/api/session", { user })
    .then((response) => handleResponseJSON(response))
    .then((data) => data);

export const signOut = () => deleteRequest("/api/session");
