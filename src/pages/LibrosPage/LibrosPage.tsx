import { Link } from "react-router";

export const LibrosPage = () => {
  return (
    <body className="bg-[#e6d5b8] text-[#332b1d] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 border-b border-black/10 pb-16">
          <div className="w-64 md:w-80 shadow-2xl transform">
            <img src="/portadaLibro.jpeg" alt="La Llamada del Aura"></img>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 italic">
              Adéntrate en esta gran aventura
            </h1>
            <ul className="space-y-3 text-xl">
              <li>
                <a
                  href="#"
                  className="underline hover:text-black decoration-1 underline-offset-4"
                >
                  Libro1.pdf
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-black decoration-1 underline-offset-4"
                >
                  Libro2.pdf
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-black decoration-1 underline-offset-4"
                >
                  Libro3.pdf
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-black decoration-1 underline-offset-4"
                >
                  Libro4.pdf
                </a>
              </li>
            </ul>
            <div className="mt-10 md:text-right">
              Para leer más,
              <Link
                key={"llave"}
                to={"/login"}
                className="hover:font-bold transition-all text-sm"
              >
                {" "}
                iniciar sesión
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between mt-16 gap-4">
          <div className="hidden lg:block w-40">
            <img
              src="/mateoAventurero.jpeg"
              alt="Guía"
              className="w-full h-auto opacity-90"
            ></img>
          </div>

          <div className="flex-1 max-w-lg mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-8">
              Recibe las últimas novedades
            </h2>

            <form className="space-y-4">
              <div className="text-left">
                <label className="text-xs uppercase tracking-widest ml-1">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full p-2 mt-1 border border-gray-400 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-700"
                ></input>
              </div>

              <label className="flex items-center justify-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-amber-800"
                ></input>
                <span>Acepto los Términos y Condiciones</span>
              </label>

              <button
                type="submit"
                className="mt-4 px-8 py-2 bg-[#f0f0f0] border border-gray-400 shadow-[3px_3px_0px_#999] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all uppercase text-sm font-bold"
              >
                Click me
              </button>
            </form>
          </div>

          <div className="hidden lg:block w-40">
            <img
              src="../../public/mateoAventurero.jpeg"
              alt="Guía"
              className="w-full h-auto opacity-90"
            ></img>
          </div>
        </section>
      </div>
    </body>
  );
};
