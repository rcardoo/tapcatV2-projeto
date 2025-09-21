import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";

import { FaKey } from "react-icons/fa6";

import Efeito3dCard from "../../components/Efeito3dCard/Efeito3dCard"

const GachaNormal = () => {

    const {id} = useParams();
    
    const location = useLocation();
    const {nome, img, price} = location.state

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-6 gap-8">
        <div className="flex flex-col gap-6 items-center justify-center">
        
        <h2 className="text-white font-bold text-2xl text-center">
          {`${nome}` || `Pack #${id}`}
        </h2>
        
        <p className="flex items-center gap-2 bg-amber-400/20 text-amber-50 font-semibold px-3 py-1 rounded-full shadow-sm">
          <FaKey className="text-yellow-400 w-5 h-5" />
          <span className="text-lg">{`Valor: ${price}`}</span>
        </p>

        <Efeito3dCard 
            image={img}
            alt={nome}
        />
        </div>

        <button
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-white"
        >
            Invocar
        </button>
    </div>
  )
}

export default GachaNormal