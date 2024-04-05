import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full  xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="new-meeting" height={27} width={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl text-white">{title}</h3>
        <p className="font-normal text-lg text-blue-2">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;