import { Link } from "react-router";

export const SignInPage = () => {
  return (
    <section className="flex flex-col justify-center items-center my-24 ">
      <h2 className=" font-custom text-5xl p-2 ">Crear una cuenta</h2>
      <form>
        <div className="flex items-start flex-col">
          <label htmlFor="mail">Email</label>
          <input name="mail" type="mail" className="bg-white m-2 rounded-md " />
        </div>

        <div className="flex items-start flex-col">
          <label htmlFor="pw">Password</label>
          <input
            name="pw"
            type="password"
            className="bg-white m-2 rounded-md "
          />
        </div>
      </form>
      <Link
        key={"clear"}
        to={"/libros"}
        className="bg-black text-white border-white rounded-2xl p-4 m-4 px-12 hover:bg-white hover:text-black"
      >
        Enviar
      </Link>
    </section>
  );
};
