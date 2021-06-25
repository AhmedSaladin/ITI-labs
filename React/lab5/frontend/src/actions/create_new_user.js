import axios from "axios";
const URL = "http://localhost:3001/users";
export default async function create_new_user(user) {
  try {
    const response = await axios.post(URL, user);
    if (response.status === 201)
      return {
        type: "USER_CREATED",
        payload: { name: user.name, image: user.image },
      };
  } catch (err) {
    console.error(err);
  }
  return { type: "USER_CREATED", payload: [] };
}
