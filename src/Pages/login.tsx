import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//<Link to="/">Home</Link>
export function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((val) => val);
    setFetchedUsers(response);
  };
  function handleInputPassword(event: any) {
    setPassword(event.target.value);
  }
  function handleInputUser(event: any) {
    setUser(event.target.value);
  }
  function checkIfCorrect(list: Array<any>) {
    console.log(fetchedUsers);
    for (const element of list) {
      console.log(element.id_user);
      if (element.email === user || element.password === password) {
        navigate("/tasks", { state: { user: element.id_user } });
      }
    }
  }

  return (
    <>
      <button></button>
      <div className="flex max-w-screen h-screen max-h-screen">
        <div className="bg-softred w-full h-full"></div>
        <div className="w-full bg-primarywhite flex flex-col h-screen items-center justify-center">
          <div className="flex items-center flex-col justify-center border-4 rounded-md border-softred p-5 bg-white">
            <h3>Inicio de sesion</h3>
            <div className=" border-red flex flex-col">
              <label htmlFor="username">Usuario:</label>
              <input
                onChange={handleInputUser}
                type="text"
                name="username"
                className="bg-reallySoftRed"
                placeholder="Usuario"
              />
            </div>
            <div className=" border-red flex flex-col">
              <label htmlFor="password">Contraseña</label>
              <input
                onChange={handleInputPassword}
                type="password"
                name="password"
                className="bg-reallySoftRed"
                placeholder="Contraseña"
              />
            </div>
            <button
              onClick={() => {
                checkIfCorrect(fetchedUsers);
              }}
              className="rounded-md bg-softred text-[#fff] px-3 mt-5"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
