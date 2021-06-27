import axios from "axios";
import { URL } from "./url";
export default async function create_new_user(user) {
  try {
    let response = await axios.post(`${URL}/users`, user);
    console.log(response);
    if (response.status === 201) {
      response = await axios.get(URL);
      return {
        type: "USER_CREATED",
        payload: response.data,
      };
    } else return { type: "USER_CREATED", payload: [] };
  } catch (err) {
    console.error(err);
  }
}
