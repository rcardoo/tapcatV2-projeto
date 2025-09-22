import type { IconType } from "react-icons";

interface CardLandingPageProps {
  titulo: string;
  texto: string;
  icon: IconType;
}

const CardLandingPage = ({ titulo, texto, icon: Icon }: CardLandingPageProps) => {
  return (
    <div className="bg-slate-900 rounded-2xl w-90 shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
      <div className="bg-blue-600 p-4 rounded-full text-white text-3xl shadow-md">
        <Icon />
      </div>
      <h2 className="text-white font-bold text-xl">{titulo}</h2>
      <p className="text-slate-400 text-sm">{texto}</p>
    </div>
  );
};

export default CardLandingPage;