import axios from "axios";
import getEnvs from "../helpers/getEnvs";
import errorOrganizer from "../helpers/errorOrganizer";

export default function AddTask() {
  const { serverUrl } = getEnvs();
  const handleSubmit = async ({ nativeEvent, target }) => {
    nativeEvent.preventDefault();
    const formData = {};
    new FormData(target).entries().forEach(([k, v]) => (formData[k] = v));
    try {
      const { data } = await axios.post(serverUrl + "/task", formData, {
        withCredentials: true,
      });
      data.success && alert(data.message);
    } catch (error) {
      errorOrganizer(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-auto max-w-7xl px-2 sm:px-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            New Task
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Need to learn cpp"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about your task.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="priority"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Priority
              </label>
              <div className="mt-2">
                <select
                  id="priority"
                  name="priority"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={"low"}>Low</option>
                  <option value={"normal"}>Normal</option>
                  <option value={"high"}>High</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={"pending"}>Pending</option>
                  <option value={"completed"}>Completed</option>
                  <option value={"dropped"}>Dropped</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="dueDate">Due date:</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value="2024-05-19"
              />
            </div>
          </div>
          <br />
          <button className="inline-flex float-end text-center items-center rounded-md bg-indigo-50 px-2 py-0 text-lg font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 hover:bg-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
