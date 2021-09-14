const loginTypeReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_LOGIN_TYPE":
      return action.payload;
    default:
      return state;
  }
};

export default loginTypeReducer;
