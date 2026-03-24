import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchPostApi } from "../lib/api";
import { addPost } from "../actions/postActions";
import { useState } from "react";

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setModalOpen(false);
    dispatch(addPost(data));
    reset();
  };

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
          <button
            onClick={() => setModalOpen(true)}
            className="m-4 px-4 py-2 self-start rounded-lg bg-green-500 text-white hover:cursor-pointer hover:bg-green-700 transition"
          >
            Add Post
          </button>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Post Form</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="userId"
                    className="text-left font-medium text-gray-700"
                  >
                    User ID
                  </label>

                  <input
                    type="text"
                    id="userId"
                    required
                    className="px-3 py-2 border rounded-md outline-none"
                    {...register("userId")}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="userId"
                    className="text-left font-medium text-gray-700"
                  >
                    ID
                  </label>

                  <input
                    type="text"
                    id="id"
                    required
                    className="px-3 py-2 border rounded-md outline-none"
                    {...register("id")}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="title"
                    className="text-left font-medium text-gray-700"
                  >
                    Title
                  </label>

                  <input
                    type="text"
                    id="title"
                    required
                    className="px-3 py-2 border rounded-md outline-none"
                    {...register("title")}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="body"
                    className="text-left font-medium text-gray-700"
                  >
                    Body
                  </label>

                  <textarea
                    id="body"
                    required
                    className="px-3 py-2 border rounded-md outline-none"
                    {...register("body")}
                  />
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      reset();
                    }}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:cursor-pointer hover:bg-gray-300"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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
