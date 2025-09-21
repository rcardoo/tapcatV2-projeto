interface MedalhasProps {
    nomeMedalha: string;
    imgMedalha: string;
  }
  
  const Medalhas = ({ nomeMedalha, imgMedalha }: MedalhasProps) => {
    return (
          <div className="flex flex-col items-center gap-2 bg-slate-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
            <img
              src={imgMedalha}
              alt={nomeMedalha}
              className="w-16 h-16 object-contain"
            />
            <span className="text-white font-medium text-sm text-center">
              {nomeMedalha}
            </span>
            <div>
            </div>
          </div>
    );
  };
  
  export default Medalhas;
  