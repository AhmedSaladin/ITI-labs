import axios from "axios";
import { URL } from "./url";
export default async function get_user_by_name(id) {
  try {
    const response = await axios.get(`${URL}/${id}`);
    if (response.status === 200)
      return { type: "USER_DETAILS", payload: response.data };
  } catch (err) {
    console.error(err);
  }
  return { type: "USER_DETAILS", payload: [] };
}
