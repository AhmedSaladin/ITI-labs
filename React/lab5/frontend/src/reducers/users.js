export default function users(state = {}, action) {
  switch (action.type) {
    case "CLEAR_USERS_LIST":
    case "USERS_LIST":
      return { ...state, list: action.payload };
    case "USER_CREATED":
    case "CLEAR_DETAILS":
    case "USER_DETAILS":
    case "USER_DELETED":
      return { ...state, details: action.payload };
    default:
      return state;
  }
}
