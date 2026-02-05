import { LeftImgSection } from "@/components/shared/LeftImgSection";
import { RightImgSection } from "@/components/shared/RightImgSection";

export const PokemonPage = () => {
  return (
    <>
      <LeftImgSection
        img="/transparent/Blaziken.png"
        title="Blaziken de Hakaru"
        body="Ya no es el luchador de tierras áridas, sino el Icaro que no teme al sol. En Hakaru, Blaziken ha desarrollado un plumaje ígneo que se despliega como un abanico de brasas en pleno vuelo. Sus saltos ya no buscan el suelo, sino las corrientes térmicas que ascienden desde los valles humeantes. Verlo descender desde el cenit es presenciar un cometa consciente; una danza vertical donde el fuego se vuelve aerodinámico y la fuerza bruta se convierte en elegancia aérea. Es la encarnación del incendio que nace en las nubes y muere en un destello de velocidad pura"
      ></LeftImgSection>
      <RightImgSection
        img="/transparent/Haunter.png"
        title="Haunter Imperial"
        body="Dicen que en los pasos de montaña más fríos de Hakaru, el aliento de los viajeros se desprende y cobra vida propia. Este Haunter es un espectro cristalizado, una entidad de escarcha que no busca asustar, sino preservar. Sus manos, antes gaseosas, son ahora garras de hielo negro que emiten un frío absoluto, capaz de congelar el tiempo mismo en un suspiro. No acecha en las sombras, sino en la blancura cegadora de las ventiscas; un eco gélido de lo que alguna vez fue vida, atrapado para siempre en la belleza estática del invierno eterno"
      ></RightImgSection>
      <LeftImgSection
        img="/transparent/Entei.png"
        title="Singular Entei"
        body="Mientras otros Entei corren por las llanuras, el guardián de Hakaru es la montaña misma en movimiento. Su pelaje, endurecido por capas de sedimento volcánico y magma solidificado, tiene la textura de la piedra ancestral. Cada una de sus pisadas es un sismo silencioso, un recordatorio de que la tierra bajo nuestros pies está viva y arde con un fuego primordial. No es un incendio fugaz, sino el calor eterno del núcleo del mundo; una deidad de roca y ceniza que camina con la pesadez de los siglos, protegiendo las venas de lava que nutren la región"
      ></LeftImgSection>
    </>
  );
};
