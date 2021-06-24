import axios from "axios";
const URL = "http://localhost:3001/users";
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
