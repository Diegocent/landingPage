import React, { useRef } from "react";
import { User } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import AngularIcon from "/logos_svg/angular-icon-svgrepo-com.svg";

import DotNetIcon from "/logos_svg/dotnet-svgrepo-com.svg";

import JavaIcon from "/logos_svg/java-svgrepo-com.svg";

import ReactIcon from "/logos_svg/react.svg";

import FlutterIcon from "/logos_svg/flutter-svgrepo-com.svg";

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Conection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const icon4Ref = useRef<HTMLDivElement>(null);
  const icon5Ref = useRef<HTMLDivElement>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-transparent py-14">
      <div className="container relative w-auto px-4 mx-auto sm:w-60 lg:w-[900px] ">
        {/* Logo centralizado con el efecto de neuronas */}
        <div
          ref={containerRef}
          className="relative flex flex-wrap h-[450px] items-center justify-center mb-10"
        >
          {/* Ícono de usuario */}
          <Circle
            ref={userIconRef}
            className="absolute items-center left-2 sm:left-2 size-16"
          >
            <User className="w-12 h-12 text-[#283d47]" />
          </Circle>
          {/* Logo de la empresa */}
          <Circle ref={logoRef} className="size-24">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/logonew.svg"
                alt="Logo"
                className="max-w-full w-18 h-18"
              />
            </div>
          </Circle>
          {/* Íconos de servicios */}
          <Circle ref={icon1Ref} className="absolute right-0 top-20 size-16">
            <div className="flex flex-col items-center justify-center">
              <img src={FlutterIcon} alt="Flutter" className="w-12 h-12" />
            </div>
          </Circle>
          <Circle ref={icon2Ref} className="absolute top-0 right-0 size-16">
            <div className="flex flex-col items-center justify-center">
              <img src={AngularIcon} alt="Angular" className="w-12 h-12" />
            </div>
          </Circle>
          <Circle ref={icon5Ref} className="absolute right-0 top-42 size-16">
            <div className="flex flex-col items-center justify-center">
              <img src={ReactIcon} alt="React" className="w-12 h-12" />
            </div>
          </Circle>
          <Circle ref={icon3Ref} className="absolute right-0 bottom-20 size-16">
            <div className="flex flex-col items-center justify-center">
              <img src={DotNetIcon} alt="DotNet" className="w-12 h-12" />
            </div>
          </Circle>
          <Circle ref={icon4Ref} className="absolute bottom-0 right-0 size-16">
            <div className="flex flex-col items-center justify-center">
              <img src={JavaIcon} alt="Java" className="w-12 h-12" />
            </div>
          </Circle>

          {/* Conexiones animadas */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={userIconRef}
            toRef={logoRef}
            curvature={-20}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={icon1Ref}
            toRef={logoRef}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={icon2Ref}
            toRef={logoRef}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={icon3Ref}
            toRef={logoRef}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={icon5Ref}
            toRef={logoRef}
            curvature={15}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={icon4Ref}
            toRef={logoRef}
            curvature={75}
            endYOffset={10}
          />
        </div>
      </div>
    </section>
  );
}
