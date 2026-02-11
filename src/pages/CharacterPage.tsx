import { LeftImgSection } from "@/components/shared/LeftImgSection";
import { RightImgSection } from "@/components/shared/RightImgSection";

export const CharacterPage = () => {
  return (
    <>
      <LeftImgSection
        img="/transparent/Freya.png"
        title="Freya: La Melancolía del Liderazgo"
        body="Freya es la primera luz antes de la tormenta. En ella reside la responsabilidad de quien sabe que el camino no se recorre solo, sino abriendo paso a los que vienen detrás. Su carácter es como el acero forjado en frío: resistente, pulido y con una sombra de sacrificio que rara vez permite ver a los demás. No es solo una entrenadora; es la arquitectura emocional que sostiene el viaje, una mujer que entiende que la verdadera fuerza no reside en el ataque, sino en la capacidad de permanecer de pie cuando el mundo decide sentarse "
      ></LeftImgSection>
      <RightImgSection
        img="/transparent/Nate2.png"
        title="Nate: El Buscador de Silencios"
        body="Nate es el contrapunto necesario, un enigma que se construye a base de silencios y medias sonrisas. No busca la gloria de los estadios ni el reconocimiento de los libros de historia; parece perseguir algo mucho más íntimo, algo que solo se encuentra en las rutas menos transitadas de Hakaru. Hay una honestidad cruda en su forma de interactuar con el mundo, como si estuviera constantemente traduciendo el ruido del entorno a un código personal que solo él comprende. Nate no está de paso; Nate está presente, y esa es su mayor virtud."
      ></RightImgSection>
      <LeftImgSection
        img="/transparent/Rue.png"
        title="Rue: El Eco de la Intuición"
        body="Si Freya es la estructura, Rue es el flujo. La hermana menor no camina por la tierra, parece deslizarse sobre ella, siempre un paso por delante de la lógica y dos pasos por detrás del peligro. Posee esa sensibilidad extraña de quienes pueden escuchar el latido de un Pokémon antes de verlo. Rue es el verso libre del grupo, una mirada curiosa que encuentra belleza en la decadencia y que nos recuerda que, a veces, la mejor estrategia es simplemente dejarse llevar por el instinto y ver dónde nos deposita la marea "
      ></LeftImgSection>
    </>
  );
};
