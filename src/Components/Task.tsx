import { Tarea } from "../Schemas/Tarea";

export default function Task({ id_tarea, id_user, tarea, descri }: Tarea) {
  const endpoint =
    "http://localhost:8000/tasks" + "/" + id_user + "/" + id_tarea; // change somehost
  async function deleteTask() {
    await fetch(endpoint, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        alert("Tarea borrada con exito");
      })
      .catch((e) => {
        console.log("Error", e);
        alert("Ocurrio un error, no se pudo eliminar la tarea");
      });
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[80%]">
          <div>{tarea}</div>
          <div>{descri}</div>
        </div>

        <button
          className="bg-[#fc1100] text-[#fff] rounded-md "
          onClick={deleteTask}
        >
          x
        </button>
      </div>
    </>
  );
}
