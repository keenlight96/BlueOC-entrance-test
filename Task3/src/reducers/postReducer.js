const initState = {
  posts: [],
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_POST":
      return { ...state, posts: [...state.posts, ...action.payload] };
    case "ADD_POST":
      return {...state, posts: [...state.posts, action.payload],}
    default:
      return state;
  }
}
