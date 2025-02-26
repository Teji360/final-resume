"use client"; // Ensure it runs only on the client side

import { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Google from "../../public/google.png"
import TGT from "../../public/TGT.jpg"
const Work = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    //TODO When you enable toggle day and night make sure the changes reflct here.
    if (typeof window !== "undefined") {
      // Dynamically load Three.js from the CDN
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"; // Load Three.js
      script.onload = () => {
        // Dynamically load Vanta.js from the CDN
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"; // Load Vanta.js Dots Effect
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
                color: 0xffffff, //0xB3A369, // Customize the dot color (green)
                color2: 0x000000,
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
      className="h-screen w-screen flex flex-col items-center space-y-3 justify-center text-white"
    >

      <h1 className="text-3xl font-semibold">Work Experience</h1>
      <div className="flex space-x-5">
        <Card className="w-60 h-80 border flex flex-col items-center">
          <CardHeader>
            <CardTitle>Google</CardTitle>
            <CardDescription>Full Stack Development implenting GRPC's.</CardDescription>
          </CardHeader>
          <CardContent>
          <Image src={Google} alt="Google Profile" height={100} width={100} className="h-10 w-10" />
          </CardContent>
        </Card>


        <Card className="w-60 h-80 flex flex-col items-center">
          <CardHeader>
            <CardTitle>Trading at Georgia Tech</CardTitle>
            <CardDescription>Weekly Market commentary and managing finance API's.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image alt="trading profile" src={TGT} className="h-10 w-10"/>
          </CardContent>
        </Card>
      </div>




    </div>
  );
};

export default Work;
