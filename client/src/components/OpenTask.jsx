import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import getEnvs from "../helpers/getEnvs";
import errorOrganizer from "../helpers/errorOrganizer";

export default function OpenTask() {
  const { id } = useParams();
  const [task, setTask] = useState({ loading: true, data: null });

  useEffect(() => {
    fetchTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get(getEnvs().serverUrl + "/task/" + id, {
        withCredentials: true,
      });
      if (!data.success) throw new Error("Internal Server Error");
      setTask({ loading: false, data: data.data });
    } catch (error) {
      errorOrganizer(error);
      setTask({ loading: false, data: null, error });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <abbr title="Edit Task">
        <Link
          to={"/task/edit/" + id}
          className="float-end w-max flex gap-2 items-center bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
        >
          <BsPencilSquare />
        </Link>
      </abbr>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Task Information
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Task Title
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.data?.title}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Task Status
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.data?.status}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Task Priority
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.data?.priority}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Task Due Date
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.data?.dueDate
                ? new Date(task.data.dueDate).toLocaleDateString()
                : "not set"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Task Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.data?.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Task Created On
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.data?.createdAt
                ? new Date(task.data.createdAt).toLocaleDateString()
                : ""}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
