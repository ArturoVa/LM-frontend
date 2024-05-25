import { Link } from "react-router-dom";

//<Link to="/">Home</Link>
export function Login() {
  return (
    <>
      <div className="flex max-w-screen h-screen max-h-screen">
        <div className="bg-softred w-full h-full"></div>
        <div className="w-full bg-primarywhite flex flex-col h-screen items-center justify-center">
          <div className="flex items-center flex-col justify-center border-4 rounded-md border-softred p-5 bg-white">
            <h3>Inicio de sesion</h3>
            <div className=" border-red flex flex-col">
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                name="username"
                className="bg-reallySoftRed"
                placeholder="Usuario"
              />
            </div>
            <div className=" border-red flex flex-col">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                className="bg-reallySoftRed"
                placeholder="Contraseña"
              />
            </div>
            <button className="rounded-md bg-softred text-[#fff] px-3 mt-5">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
