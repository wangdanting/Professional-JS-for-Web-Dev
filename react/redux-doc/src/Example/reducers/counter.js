export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT1":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
