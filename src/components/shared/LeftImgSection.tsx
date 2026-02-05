interface Props {
  img: string;
  title: string;
  body: string;
}

export const LeftImgSection = ({ img, title, body }: Props) => {
  return (
    <>
      <section className="grid grid-cols-3  p-8 m-8  rounded-xl shadow-xl relative ">
        <div className="absolute bg-blur opacity-10 inset-0 bg-cover bg-center"></div>
        <img src={img} alt="esto es indescriptible..." className="col-span-1" />
        <article className="col-span-2 m-4 p-4 font-custom flex items-center flex-col justify-center ">
          <h3 className="text-5xl p-4">{title}</h3>
          <p className="leading-relaxed">{body}</p>
        </article>
      </section>
    </>
  );
};
