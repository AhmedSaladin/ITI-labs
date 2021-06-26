export default function users(state = {}, action) {
  switch (action.type) {
    case "CLEAR_USERS_LIST":
    case "USER_CREATED":
    case "USERS_LIST":
      return { ...state, list: action.payload };

    case "CLEAR_DETAILS":
    case "USER_DETAILS":
    case "USER_DELETED":
    case "USER_UPDATED":
      return { ...state, details: action.payload };
    default:
      return state;
  }
}
