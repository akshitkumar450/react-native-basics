const initialState = {
  count: 0,
  posts: [],
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RE":
      return {
        count: 0,
        posts: null,
      };
    case "POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
