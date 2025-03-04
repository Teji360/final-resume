"use client"

import Link from "next/link";
import { useEffect, useState, useRef } from "react"
import TechStack from "./TechStack";

const Education = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically load Three.js from the CDN
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"; // Load Three.js
      script.onload = () => {
        // Dynamically load Vanta.js from the CDN
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"; // Load Vanta.js Trunk Effect
        vantaScript.onload = () => {
          if (!vantaEffect) {
            setVantaEffect(
              window.VANTA.WAVES({
                el: myRef.current, // Apply the effect to the referenced element
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0x000000, // Customize the trunk color (white)
                color2: 0xffffff,
                backgroundColor: 0x000000, // Customize background color (black)
              })
            );
          }
        };
        document.body.appendChild(vantaScript);
      };
      document.body.appendChild(script);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef} // Reference element to apply the effect
      className="h-screen w-screen space-y-5 flex flex-col text-white dark:text-black p-5 sm:p-10 md:p-20"
    >
      <div className="space-y-5 text-base sm:text-lg md:text-xl">
        <p>
          I attend <span className="text-[#B3A369]">Georgia Institute of Technology College of Computing. 🐝</span>
          class of '27.
        </p>

        <p>
          I am interested in Machine Learning, Software Engineering, and Quantitative Trading
        </p>
      </div>

      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl">Skills</h1>
        <TechStack />
      </div>

      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl">Clubs</h1>
        <p>Trading at Georgia Tech (TGT)</p>
        <p>Artificial Intelligence At Georgia Tech (AI@GT)</p>
        <p>Black Student Coding Organization (BSCO)</p>
      </div>

      <div className="space-y-1">
        <h1 className="text-lg sm:text-xl md:text-2xl">Links</h1>
        
        <p className="text-blue-500 underline">
          <Link href="https://www.linkedin.com/in/david-aror-40a55219a/">LinkedIn</Link>
        </p>

        <p className="text-blue-500 underline">
          <Link href="https://leetcode.com/u/Asthetix/">Leetcode</Link>
        </p>

        <p className="text-blue-500 underline">
          <Link href="https://codeforces.com/profile/9ineout">Codeforces</Link>
        </p>

        <p className="text-blue-500 underline">
          <Link href="https://github.com/Teji360">Github</Link>
        </p>

        <p className="text-blue-500 underline">
          <Link href="https://www.kaggle.com/davidaro">Kaggle</Link>
        </p>
      </div>
    </div>
  );
};

export default Education;
