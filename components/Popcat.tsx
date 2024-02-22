"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import cat1 from "@/public/img/cat1.png";
import cat2 from "@/public/img/cat2.png";

const Popcat = () => {
    const [count, setCount] = useState(0)
    const [catPath, setCatPath] = useState(cat1)

    const delay = (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

    const handleClick=()=>{
        setCount(count+1);
        setTimeout(() => {
            setCatPath(cat1)
        },50);
        setCatPath(cat2)
    }

  return (
    <div className="flex">  
        <Image src="/img/bg.png" alt="Background image" fill/>
        <div className="absolute top-[10%] left-[47%] transform -translate-x-1/2">
            <p className="text-5xl">{count}</p>
        </div>
        <div onClick={handleClick} className="absolute bottom-0 left-[45%] transform -translate-x-1/2">
            <Image src={catPath} alt="cat" width={500} height={500}/>
        </div>
    </div>

  );
};

export default Popcat;
