import PackEspecial from "../../components/Packs/PackEspecial/PackEspecial";
import PackNormal from "../../components/Packs/PackNormal/PackNormal";

import packOneOnepiece from "../../assets/packs/packOneOnepiece.svg";
import packOnepunch from "../../assets/packs/packOneOnepunch.svg";
import backcard from "../../assets/backcard.png";

const GachaMenu = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-slate-950 p-6 gap-10">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <h2 className="mt-16 mb-8 text-white font-bold text-4xl sm:text-5xl md:text-4xl text-center">
          Packs
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 py-4 px-2">
          <PackEspecial
            idPackEspecial={21}
            imgPackEspecial={packOneOnepiece}
            nomePackEspecial="One Piece"
            pricePackEspecial={2}
            packEspecialNomeAnime="One Piece"
          />

          <PackEspecial
            idPackEspecial={30276}
            imgPackEspecial={packOnepunch}
            nomePackEspecial="One Punch Man"
            pricePackEspecial={5}
            packEspecialNomeAnime="One Punch Man"
          />

          <PackNormal
            imgPackNormal={backcard}
            nomePackNormal="Pack Padrão"
            pricePackNormal={1}
          />
        </div>
      </div>
    </div>
  );
};

export default GachaMenu;
