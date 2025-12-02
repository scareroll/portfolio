import Image from "next/image";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const designs = [
  {
    src: "/design/1.png",
    alt: "Design Portfolio",
  },
  // Добавьте другие дизайны здесь
];

export default function DesignsPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-x-hidden">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Designs
          </h2>
          <p className="mt-4 text-zinc-300">
            Here are some of my design works.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3">
          {designs.map((design, index) => (
            <Card key={index}>
              <article className="relative w-full h-full flex flex-col items-center">
                <div className="z-10 flex flex-col items-center">
                  <div className="relative w-full max-w-sm h-auto rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={design.src}
                      alt={design.alt}
                      width={500}
                      height={350}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
