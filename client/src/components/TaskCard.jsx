/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function TaskCard({ task }) {
  return (
    <div className="border p-4 relative rounded mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link to={"/task/" + task._id}>
            <span aria-hidden="true" className="absolute inset-0" />
            {task.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{task.priority}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{task.status}</p>
    </div>
  );
}
