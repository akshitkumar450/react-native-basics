export const increment = () => {
  return {
    type: "INC",
  };
};
export const decrement = () => {
  return {
    type: "DEC",
  };
};
export const reset = () => {
  return {
    type: "RE",
  };
};

const savePosts = (data) => {
  return {
    type: "POSTS",
    payload: data,
  };
};

// thunk
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch(savePosts(data));
  };
};
