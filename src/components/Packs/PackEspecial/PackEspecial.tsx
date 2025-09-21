import { Link } from "react-router-dom";
import Efeito3dCard from "../../Efeito3dCard/Efeito3dCard";

interface PackEspecialProps {
    nomePackEspecial?: string;
    idPackEspecial?: string;
    imgPackEspecial?: string;
    princePackEspecial?: number;
}

const PackEspecial = ({nomePackEspecial, idPackEspecial, imgPackEspecial}: PackEspecialProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        to={`/summon-pack/${idPackEspecial}`}
        className="w-[258px] h-[388px]"
      >        
        <Efeito3dCard image={imgPackEspecial} alt={nomePackEspecial}/>
      </Link>
      <h2 className="text-white font-bold text-16 text-center">{nomePackEspecial}</h2>
    </div>
  )
}

export default PackEspecial