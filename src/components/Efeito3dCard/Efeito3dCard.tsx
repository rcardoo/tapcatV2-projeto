import { useState } from "react";

interface Card3DProps {
  image?: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
  onLoad?: () => void;
}

const Efeito3dCard = ({ image, alt, width = "258px", height = "388px", className = "", onLoad }: Card3DProps) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -20;
    const rotateY = ((x / width) - 0.5) * 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  };

  return (
    <div style={{ width, height, perspective: "1000px" }}>
      <div
        className={`w-full h-full overflow-hidden rounded-xl transition-transform duration-200 ease-out cursor-pointer ${className}`}
        style={{ transform }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
          onLoad={onLoad}
        />
      </div>
    </div>
  );
};

export default Efeito3dCard;
