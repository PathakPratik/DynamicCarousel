const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  }
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password
  }
}