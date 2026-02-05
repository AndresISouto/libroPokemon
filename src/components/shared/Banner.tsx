export const Banner = () => {
  return (
    <section className="relative" style={{ height: "calc(100vh - 104px)" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/wallpaper.jpg)" }}
      ></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-30 bg-black"></div>
      <div className="absolute flex items-center h-full flex-col justify-center ml-4 text-white">
        <h2 className=" font-custom font-bold text-4xl p-2 ">
          Bienvenidos a esta gran aventura pokemon!
        </h2>
        <h3 className=" font-custom font-semibold text-2xl p-2">
          Donde sabes donde empiezas pero no donde vas a acabar...
        </h3>
        <button
          className="group relative inline-flex h-12 items-center 
justify-center overflow-hidden rounded-md 
border border-neutral-200 bg-white px-6 
font-medium text-black transition-all 
duration-100 [box-shadow:5px_5px_rgb(82_82_82)] 
active:translate-x-1 active:translate-y-1 
active:[box-shadow:0px_0px_rgb(82_82_82)]"
        >
          Descargar el primer libro
        </button>
      </div>
    </section>
  );
};
