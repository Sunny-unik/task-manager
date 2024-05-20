/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import getEnvs from "../helpers/getEnvs";
import errorOrganizer from "../helpers/errorOrganizer";

export default function TaskCard({ task, fetchTasks }) {
  const handlePriorityUpdate = async ({ target }) => {
    if (target.value === task.priority) return;
    try {
      const { data } = await axios.put(
        getEnvs().serverUrl + "/task/" + task._id,
        { ...task, priority: target.value },
        { withCredentials: true }
      );
      if (!data.success) throw new Error("Internal Server Error");
      fetchTasks();
    } catch (error) {
      errorOrganizer(error);
    }
  };

  return (
    <div className="border p-4 relative rounded mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link to={"/task/" + task._id}>
            <span aria-hidden="true" className="absolute" />
            {task.title}
          </Link>
        </h3>
        <p className="text-gray-400">
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due"}
        </p>
      </div>
      <div className="text-sm font-medium text-gray-900">
        <h5 className="mb-1">{task.status}</h5>
        <span className="mt-1 text-sm text-gray-500">
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handlePriorityUpdate}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value={"low"}>Low</option>
            <option value={"normal"}>Normal</option>
            <option value={"high"}>High</option>
          </select>
        </span>
      </div>
    </div>
  );
}
