export const fetchPost = (data) => {
  return {
    type: "FETCH_POST",
    payload: data,
  };
};

export const addPost = (data) => {
  return {
    type: "ADD_POST",
    payload: data,
  };
};
