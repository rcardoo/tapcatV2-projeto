import Efeito3dCard from "../../Efeito3dCard/Efeito3dCard";
import { Link } from "react-router-dom";

interface PackNormalProps {
    nomePackNormal?: string;
    imgPackNormal?: string;
    princePackNormal?: number;
}

const PackNormal = ({nomePackNormal, imgPackNormal}:PackNormalProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
        <Link to={"/summon-default"}>
            <Efeito3dCard image={imgPackNormal} alt="Pack Padrão" />
        </Link>
        <h2 className="text-white font-bold text-16 text-center">{nomePackNormal}</h2>
  </div>
  )
}

export default PackNormal