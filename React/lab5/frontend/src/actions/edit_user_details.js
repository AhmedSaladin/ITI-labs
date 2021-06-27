import axios from "axios";
import { URL } from "./url";
export default async function edit_user_data(id, user) {
  try {
    let response = await axios.put(`${URL}/${id}`, user);
    if (response.status === 204) {
      response = await axios.get(`${URL}/${id}`);
      return { type: "USER_UPDATED", payload: response.data };
    } else return { type: "USER_UPDATED", payload: [] };
  } catch (err) {
    console.error(err);
  }
}
