import axios from "axios";
const URL = "http://localhost:3001/users";
export default async function delete_user(id) {
  try {
    await axios.delete(`${URL}/${id}`);
    return { type: "USER_DELETED", payload: [] };
  } catch (err) {
    console.error(err);
  }
  return { type: "USER_DELETED", payload: [] };
}
