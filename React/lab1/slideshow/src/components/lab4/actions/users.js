export const get_users = () => {
  return {
    type: "USERS_LIST",
    payload: [
      {
        id: 1,
        name: "zaki",
        email: "zaki@gmail.com",
      },
      {
        id: 2,
        name: "ali",
        email: "ali@gmail.com",
      },
      {
        id: 3,
        name: "ahmed",
        email: "ahmed@gmail.com",
      },
      {
        id: 4,
        name: "lila",
        email: "lila@gmail.com",
      },
      {
        id: 5,
        name: "emy",
        email: "emy@gmail.com",
      },
      {
        id: 6,
        name: "nasser",
        email: "nasser@gmail.com",
      },
    ],
  };
};
