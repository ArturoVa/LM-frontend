export default function Task({
  id_tarea: number,
  id_user: number,
  tarea: string,
  descri: string,
}) {
  const url = "somehost";
  async function deleteTask() {
    await fetch(url + "/" + id_user + "/" + id_tarea, {
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
      <div>
        <div>{tarea}</div>
        <div>{descri}</div>
        <button onClick={deleteTask}>Eliminar tarea</button>
      </div>
    </>
  );
}
