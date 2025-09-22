import { Link } from "react-router-dom";
import Efeito3dCard from "../../Efeito3dCard/Efeito3dCard";

interface PackEspecialProps {
    nomePackEspecial?: string;
    idPackEspecial?: number;
    imgPackEspecial?: string;
    pricePackEspecial?: number;
    packEspecialNomeAnime?: string;
}

const PackEspecial = ({nomePackEspecial, idPackEspecial, imgPackEspecial, pricePackEspecial, packEspecialNomeAnime}: PackEspecialProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        to={`/gacha/especial-pack/${idPackEspecial}`}
        state={{nome: nomePackEspecial, img: imgPackEspecial, price: pricePackEspecial, nomeAnime: packEspecialNomeAnime}}
        className="w-[258px] h-[388px]"
      >        
        <Efeito3dCard image={imgPackEspecial} alt={nomePackEspecial}/>
      </Link>
      <h2 className="text-white font-bold text-16 text-center">{nomePackEspecial}</h2>
    </div>
  )
}

export default PackEspecial