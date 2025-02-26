"use client"; // Ensure it runs only on the client side

import { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Google from "../../public/google.png";
import TGT from "../../public/TGT.jpg";

const Work = () => {
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
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"; // Load Vanta.js Globe Effect
        vantaScript.onload = () => {
          if (!vantaEffect) {
            setVantaEffect(
              window.VANTA.GLOBE({
                el: myRef.current, // Apply the effect to the referenced element
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xffffff,
                color2: 0x000000,
                backgroundColor: 0x000000,
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
      className="h-screen w-screen flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8"
    >
      <h1 className="text-3xl font-semibold mb-6">Work Experience</h1>

      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {/* Google Card */}
        <Card className="w-full sm:w-60 md:w-60 h-80 flex flex-col items-center">
          <CardHeader>
            <CardTitle>Google</CardTitle>
            <CardDescription>Full Stack Development implementing GRPC's.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={Google} alt="Google Profile" height={100} width={100} className="h-10 w-10" />
          </CardContent>
        </Card>

        {/* Trading at Georgia Tech Card */}
        <Card className="w-full sm:w-60 md:w-60 h-80 flex flex-col items-center">
          <CardHeader>
            <CardTitle>Trading at Georgia Tech</CardTitle>
            <CardDescription>Weekly Market commentary and managing finance API's.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image alt="Trading profile" src={TGT} className="h-10 w-10" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Work;
