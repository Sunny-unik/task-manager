import { Link } from "react-router-dom";
import { useUser } from "../UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import getEnvs from "../helpers/getEnvs";
import errorOrganizer from "../helpers/errorOrganizer";
import TaskCard from "./TaskCard";

export default function Home() {
  const { user } = useUser();
  const { serverUrl } = getEnvs();
  const [tasks, setTasks] = useState({ loading: true, data: [] });

  useEffect(() => {
    user && fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(serverUrl + "/task", {
        withCredentials: true,
      });
      setTasks({ loading: false, data: data.data });
    } catch (error) {
      errorOrganizer(error);
      setTasks({ loading: false, error });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {!user ? (
        <section className="py-10">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">
              New to this platform
            </h2>
            <p className="text-center text-lg mt-4">
              Boost your productivity by starting use of out product today.
            </p>
            <div className="flex justify-center mt-8 ">
              <Link
                to="/register"
                className="border p-1 px-2 rounded bg-indigo-600 text-white hover:bg-white hover:text-indigo-600"
              >
                Start Now
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              All your tasks
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {!tasks.loading ? (
                <>
                  {tasks.data.length ? (
                    tasks.data.map((task) => (
                      <TaskCard task={task} key={task._id} />
                    ))
                  ) : (
                    <div className="text-bold underline text-2xl">
                      Not any task found
                    </div>
                  )}
                </>
              ) : (
                <div className="text-bold underline text-4xl">...loading</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
