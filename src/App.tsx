// Importanto icons
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineMoneyOff } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiLuckyFisherman } from "react-icons/gi";
import { PiCatDuotone } from "react-icons/pi";
import { FaArrowDown } from "react-icons/fa";

// Outras importações
import { Link } from "react-router-dom";
import CardLandingPage from "./components/CardLandingPage/CardLandingPage";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center gap-10 text-center px-4">
        <h1 className="text-white font-bold text-7xl">TapCat</h1>

        <span className="text-slate-400 text-lg max-w-xl">
          Colete chaves, desbloqueie e summone os personagens de anime que você ama!
        </span>

        {/* Features */}
        <div className="flex flex-wrap gap-6 justify-center text-slate-400">
          <span className="flex items-center gap-2">
            <MdOutlineMoneyOff /> Gratuito
          </span>
          <span className="flex items-center gap-2">
            <FaPeopleGroup /> Vários Personagens
          </span>
          <span className="flex items-center gap-2">
            <GiLuckyFisherman /> Gacha
          </span>
        </div>

        {/* Button Jogar */}
        <Link
          to="/login"
          className="bg-blue-600 px-6 py-3 flex items-center gap-3 rounded-full font-bold text-white hover:bg-blue-700 transition"
        >
          <PiCatDuotone className="text-xl" />
          Jogar
        </Link>

        <FaArrowDown className="text-white mt-10 font-bold" />
      </section>

      {/* Cards Section */}
      <section className="p-8 flex flex-wrap justify-center gap-6">
        <CardLandingPage
          titulo="Sobre o Projeto"
          texto="TapCat é um jogo inovador que combina a magia dos animes com mecânicas de summoning envolventes. Colete, evolua e batalhe com seus personagens favoritos em aventuras épicas."
          icon={IoGameControllerOutline}
        />
        <CardLandingPage
          titulo="Sobre Mim"
          texto="Sou desenvolvedor apaixonado por games e animes, buscando unir tecnologia e diversão em projetos criativos e interativos."
          icon={IoGameControllerOutline}
        />
        <CardLandingPage
          titulo="Tecnologias Usadas"
          texto="React, Tailwind CSS, Firebase e outras ferramentas modernas foram utilizadas para dar vida ao TapCat."
          icon={IoGameControllerOutline}
        />
      </section>
    </div>
  );
}

export default App;
