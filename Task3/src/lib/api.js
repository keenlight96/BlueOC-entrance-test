import { fetchPost } from "../actions/postActions";

export const fetchPostApi = () => async (dispatch) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data)

    dispatch(fetchPost(data));
  } catch {}
};
