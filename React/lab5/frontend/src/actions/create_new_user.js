import axios from "axios";
const URL = "http://localhost:3001";
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
