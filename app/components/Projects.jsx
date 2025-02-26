"use client"; // Ensure it runs only on the client side

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Projects = () => {
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
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"; // Load Vanta.js Dots Effect
        vantaScript.onload = () => {
          if (!vantaEffect) {
            setVantaEffect(
              window.VANTA.NET({
                el: myRef.current, // Apply the effect to the referenced element
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xffffff, //0xB3A369, // Customize the dot color (green)
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
      className="h-screen w-screen flex flex-col items-center space-y-3 justify-center text-white"
    >
      <h1 className="font-semibold text-3xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card className="w-60 h-80 border border-black">
          <CardHeader>
            <CardTitle>vision-guard</CardTitle>
            <CardDescription>TreeHacks Project that aims to increase safety on roads.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://github.com/JayYeung/tesla_kaggle"><Button>Learn More</Button></Link>
          </CardContent>
          <CardFooter>
            python, numpy, OpenAI
          </CardFooter>
        </Card>


        <Card className="w-60 h-80">
          <CardHeader>
            <CardTitle>face-detection</CardTitle>
            <CardDescription>Face detection software that can track emotions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://github.com/Teji360/face-recog"><Button>Learn More</Button></Link>
          </CardContent>
          <CardFooter>
            opencv, seaborn
          </CardFooter>
        </Card>


        <Card className="w-60 h-80">
          <CardHeader>
            <CardTitle>finance-games</CardTitle>
            <CardDescription>Game where users guess the performance of stocks.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://github.com/Teji360/finance-games"><Button>Learn More</Button></Link>
          </CardContent>
          <CardFooter>
            nextjs, vercel, finhubapi, yahoofinance
          </CardFooter>
        </Card>
        

        <Card className="w-60 h-80">
          <CardHeader>
            <CardTitle>3D-graphics-engine</CardTitle>
            <CardDescription>built a graphics engine with shaders</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://github.com/Teji360/LeaningOpenGL"><Button>Learn More</Button></Link>
          </CardContent>
          <CardFooter>
            C++, CMake, OpenGL
          </CardFooter>
        </Card>
      </div>


    </div>
  );
};

export default Projects;
