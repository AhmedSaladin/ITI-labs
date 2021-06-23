export default function users_list(state = null, action) {
  if (action.type === "USERS_LIST") return action.payload;
  return state;
}
