import PackEspecial from "../../components/Packs/PackEspecial/PackEspecial"
import PackNormal from "../../components/Packs/PackNormal/PackNormal"

import packOneOnepiece from "../../assets/packs/packOneOnepiece.svg"
import backcard from "../../assets/backcard.png"
import packOnepunch from "../../assets/packs/packOneOnepunch.svg"

const GachaMenu = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-slate-950 p-6 gap-10">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <h2 className="mt-16 mb-8 text-white font-bold text-4xl sm:text-5xl md:text-7xl text-center">
          Packs
        </h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 py-4 px-2">
          <PackEspecial idPackEspecial="1" imgPackEspecial={packOneOnepiece} nomePackEspecial="Pack Limitado: One Piece" princePackEspecial={5}/>
          <PackEspecial idPackEspecial="1" imgPackEspecial={packOnepunch} nomePackEspecial="Pack Limitado: One Punch Man" princePackEspecial={5}/>
          <PackNormal imgPackNormal={backcard} nomePackNormal="Teste"/>
        </div>
      </div>
    </div>
  )
}
export default GachaMenu