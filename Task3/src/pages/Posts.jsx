import { useDispatch, useSelector } from "react-redux";
import { fetchPostApi } from "../lib/api";
import PostForm from "../components/PostForm";

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl">Post Management</h1>
        <div>
          <button
            onClick={() => dispatch(fetchPostApi())}
            className="m-4 px-4 py-2 self-start rounded-lg bg-green-500 text-white hover:cursor-pointer hover:bg-green-700 transition"
          >
            Fetch Post
          </button>
        </div>

        <PostForm />

        <table className="m-4 p-2 table-fixed text-left border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 bg-gray-200 w-1/10">
                User Id
              </th>
              <th className="p-2 border border-gray-300 bg-gray-200 w-1/10">
                Id
              </th>
              <th className="p-2 border border-gray-300 bg-gray-200 w-3/10">
                Title
              </th>
              <th className="p-2 border border-gray-300 bg-gray-200 w-5/10">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 &&
              posts.map((p) => (
                <tr>
                  <td className="p-2 border border-gray-300">{p.userId}</td>
                  <td className="p-2 border border-gray-300">{p.id}</td>
                  <td className="p-2 border border-gray-300">{p.title}</td>
                  <td className="p-2 border border-gray-300">{p.body}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Posts;
