// Icons
import { FaHeart, FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { PiCat, PiTreasureChestBold } from "react-icons/pi";

// Router
import { Link } from "react-router-dom";

// Context
import { useUserData } from "../../context/UserDataContext";

const Menu = () => {
  const { userData } = useUserData(); // pega os dados do usuário em tempo real

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-4 sm:px-6 py-2 rounded-full shadow-lg flex items-center gap-4 sm:gap-6 text-xs sm:text-sm z-50">
      
      {/* Status */}
      <div className="flex items-center gap-1 sm:gap-2">
        <GiClick className="text-blue-400" />
        <span className="hidden sm:inline font-semibold">Cliques:</span>
        <span>{userData?.status.clicks ?? "Buscando"}</span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <FaKey className="text-yellow-400" />
        <span className="hidden sm:inline font-semibold">Chaves:</span>
        <span>{userData?.status.chaves ?? "Buscando"}</span>
      </div>      

      {/* Divider */}
      <div className="w-px h-5 bg-slate-600" />        
        
      {/* Links Menu */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          to="/game"
          className="flex items-center justify-center gap-1 sm:gap-2 bg-purple-600 hover:bg-purple-700 transition px-2 sm:px-3 py-1 rounded-full font-medium"
        >
          <PiCat />
          <span className="hidden sm:inline">TapCat</span>
        </Link>

        <Link
          to="/gacha"
          className="flex items-center justify-center gap-1 sm:gap-2 bg-red-400 hover:bg-red-600 transition px-2 sm:px-3 py-1 rounded-full font-medium"
        >
          <FaHeart />
          <span className="hidden sm:inline">Summon</span>
        </Link>

        <Link
          to="/inventario"
          className="flex items-center justify-center gap-1 sm:gap-2 bg-green-600 hover:bg-green-700 transition px-2 sm:px-3 py-1 rounded-full font-medium"
        >
          <PiTreasureChestBold />
          <span className="hidden sm:inline">Inventário</span>
        </Link>

        <Link
          to="/perfil"
          className="flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 transition px-2 sm:px-3 py-1 rounded-full font-medium"
        >
          <FaUser />
          <span className="hidden sm:inline">Perfil</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
