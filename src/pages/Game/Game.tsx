import cat  from "../../assets/cat.webp"
import Menu from "../../components/Menu/Menu"

const Game = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center relative">
        
        <Menu />

        <button className="mt-20 focus:outline-none active:scale-95 transition">
            <img 
                src={cat}
                alt="Gato do TapCat"
                className="w-40 sm:w-56 md:w-64 lg:w-72 select-none pointer-events-none"
            />
        </button>
    </div>
  )
}

export default Game