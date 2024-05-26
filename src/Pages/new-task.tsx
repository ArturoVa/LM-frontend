import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function NewTask() {
  const { state } = useLocation();
  const { user } = state;
  const [descri, setDescri] = useState();
  const [tarea, setTarea] = useState();
  const navigate = useNavigate();
  console.log(user);
  async function createTask() {
    await fetch("http://localhost:8000/tasks/" + user, {
      method: "POST",
      body: JSON.stringify({ id_user: user, tarea, descri }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => alert("Tarea creada con exito"))
      .catch((e) => alert("Ocurrio un error"));
  }
  function handleInputDescri(event: any) {
    setDescri(event.target.value);
  }
  function handleInputTarea(event: any) {
    setTarea(event.target.value);
  }
  async function addTask() {
    if (descri != "" && tarea != "") {
      await createTask();
      navigate("/tasks", { state: { user } });
    }
  }
  return (
    <>
      <div className="bg-softred w-screen h-screen flex justify-center items-center">
        <div className="bg-primarywhite w-[80vw] h-[85vh] p-3">
          <div className="border-reallySoftRed border-2 w-full h-full flex flex-col p-4 justify-center items-center gap-5  ">
            <div className="flex justify-center items-center flex-col p-5 border-[#7F1425] border-2 rounded-md">
              <div className="">
                <h2 className="text-center w-full">Agregar nueva tarea</h2>
              </div>
              <div className="flex flex-col w-[25vw]">
                <label htmlFor="username">Tarea:</label>
                <input
                  onChange={handleInputTarea}
                  type="text"
                  name="username"
                  className="bg-reallySoftRed"
                  placeholder="Tarea"
                />
              </div>
              <div className="flex flex-col w-[25vw]">
                <label htmlFor="username">Descripción:</label>
                <textarea
                  onChange={handleInputDescri}
                  name="username"
                  className="bg-reallySoftRed"
                  placeholder="Descripcion"
                />
              </div>
              <button
                onClick={addTask}
                className="text-sm mt-5 bg-softred px-3 py-1 text-primarywhite rounded-md"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
