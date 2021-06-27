import axios from "axios";
import { URL } from "./url";
export default async function get_user_by_name(name) {
  try {
    let response;
    if (name === "") response = await axios.get(URL);
    else response = await axios.get(`${URL}?name=${name}`);
    if (response.status === 200)
      return { type: "USERS_LIST", payload: response.data };
  } catch (err) {
    console.error(err);
  }
  return { type: "USERS_LIST", payload: [] };
}
