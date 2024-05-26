import Task from "../Components/Task";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tarea } from "../Schemas/Tarea";
export function Home() {
  const { state } = useLocation();
  const { user } = state;
  const [tasks, setTask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUserTask();
  }, []);
  async function fetchUserTask() {
    const response = await fetch("http://localhost:8000/tasks/" + user, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((val) => val);
    setTask(response);
    return;
  }
  const listMap = tasks.map((task: Tarea) => {
    return (
      <Task
        id_tarea={task.id_tarea}
        id_user={task.id_user}
        descri={task.descri}
        tarea={task.tarea}
      />
    );
  });
  return (
    <>
      <div className="bg-softred w-screen h-screen flex justify-center items-center">
        <div className="bg-primarywhite w-[80vw] h-[85vh] p-3">
          <div className="border-reallySoftRed border-2 w-full h-full flex flex-col p-4">
            <div className="flex ">
              <h2 className="text-center w-full">Tareas</h2>
              <button
                onClick={() => {
                  navigate("/new-task", { state: { user } });
                }}
                className="text-sm"
              >
                Agregar tarea
              </button>
            </div>
            <div className="flex flex-col gap-2 overflow-auto">{listMap}</div>
          </div>
        </div>
      </div>
    </>
  );
}
