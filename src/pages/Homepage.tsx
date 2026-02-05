import { Banner } from "@/components/shared/Banner";
import { LeftImgSection } from "@/components/shared/LeftImgSection";
import { RightImgSection } from "@/components/shared/RightImgSection";

export const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <RightImgSection
        img="/transparent/Nate.png"
        title="No busques el destino,
  deja que el rastro te encuentre"
        body="Bienvenidos, buscadores de lo efímero. Cruzar el umbral de mi laboratorio no es solo un trámite administrativo para recibir una Pokédex; es el primer verso de vuestra propia elegía. En este mundo, los Pokémon no son meras herramientas de combate, sino espejos de nuestra propia esencia salvaje. Coged vuestra mochila, no como quien carga suministros, sino como quien acarrea sus sueños todavía por nombrar. El camino es incierto, el rocío de la mañana es frío y la verdad... la verdad solo se revela a quienes se atreven a caminar sin mapa, pero con propósito. Elegid bien a vuestro compañero, porque en su mirada encontraréis el eco de vuestro propio valor"
      />
      <LeftImgSection
        img="/Atlas/Atlas/003 - Hoenn.jpeg"
        title="Donde el viento susurra secretos"
        body="Hakaru no es solo un punto en el mapa; es un estado mental. Desde los acantilados de bruma perpetua que custodian el norte, hasta los valles donde el sol parece detenerse a descansar entre los pétalos de las flores de cerezo, esta región ha sido diseñada por el capricho de una naturaleza que se niega a ser domesticada. Aquí, la geografía se entrelaza con la leyenda. Hakaru es un lienzo de contrastes: rutas que parecen laberintos de una mente inquieta y ciudades que laten al ritmo de un corazón antiguo. Venid a Hakaru no para conquistar gimnasios, sino para perderos en la inmensidad de lo que significa estar vivo entre criaturas de leyenda"
      />
      <RightImgSection
        img="/mateo-bohemio.jpeg"
        title="Té Matcha y el Arte de Capturar Mitos"
        body="Me defino como un recolector de instantes y un observador de lo invisible. Mi vida oscila entre la calidez ceremonial de un té matcha a media tarde —buscando ese equilibrio exacto entre la amargura de la realidad y la lucidez del sueño— y la búsqueda constante de la palabra precisa. Para mí, escribir sobre Pokémon no es un ejercicio de nostalgia, sino una forma de traducir el lenguaje de la naturaleza a algo que el corazón humano pueda entender. Soy un bohemio que encuentra la belleza tanto en un atardecer sangriento sobre las cumbres de Hakaru como en el rastro de tinta que deja una pluma cansada. Bienvenidos a mi universo; un lugar donde el tiempo se detiene para que, por fin, podamos escuchar lo que las criaturas del bosque tienen que decirnos"
      />
    </>
  );
};
