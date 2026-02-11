interface Props {
  img: string;
  title: string;
  body: string;
}

export const LeftImgSection = ({ img, title, body }: Props) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 text-balance p-4 m-2 md:p-8 md:m-8  rounded-3xl shadow-xl relative max-h- ">
        <div className="absolute bg-blur opacity-10 inset-0 bg-cover bg-center"></div>
        <img
          src={img}
          alt="esto es indescriptible..."
          className="col-span-1 max-h-150 my-auto max-w-full object-contain"
        />
        <article className="col-span-2 m-4 p-4 font-custom flex items-center flex-col justify-center ">
          <h3 className=" text-3xl md:text-5xl p-4 font-semibold">{title}</h3>
          <p className="leading-relaxed">{body}</p>
        </article>
      </section>
    </>
  );
};
