import Efeito3dCard from "../../Efeito3dCard/Efeito3dCard";
import { Link } from "react-router-dom";


interface PackNormalProps {
    nomePackNormal?: string;
    imgPackNormal?: string;
    pricePackNormal?: number;
}

const PackNormal = ({nomePackNormal, imgPackNormal, pricePackNormal}:PackNormalProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
        <Link to={"/gacha/normal-pack"}
            state={{nome: nomePackNormal, img: imgPackNormal, price: pricePackNormal}}
        >
            <Efeito3dCard image={imgPackNormal} alt="Pack Padrão" />
        </Link>
        <h2 className="text-white font-bold text-16 text-center">{nomePackNormal}</h2>
  </div>
  )
}

export default PackNormal