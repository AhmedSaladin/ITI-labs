import axios from "axios";
const URL = "http://localhost:3001";
export default async function get_user_by_name(name) {
  try {
    let response;
    if (name === "") response = await axios.get(URL);
    else response = await axios.get(`${URL}/users?name=${name}`);
    if (response.status === 200)
      return { type: "USERS_LIST", payload: response.data };
  } catch (err) {
    console.error(err);
  }
  return { type: "USERS_LIST", payload: [] };
}
