import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <section className="flex flex-col justify-center items-center my-24 ">
      <h2 className=" font-custom text-5xl p-2 ">Iniciar Sesión</h2>
      <h3 className=" font-custom text-xl ">Introduce tu email</h3>
      <form>
        <input type="mail" className="bg-white m-2 rounded-md " />
      </form>
      <p>
        ¿No tienes cuenta? Crea una{" "}
        <Link key={"llave"} to={"/signIn"} className="text-blue-600">
          Aquí
        </Link>
      </p>
      <Link
        key={"volver"}
        to={"/libros"}
        className="bg-black text-white border-white rounded-2xl p-4 m-4 px-12 hover:bg-white hover:text-black"
      >
        Log in
      </Link>
    </section>
  );
};
