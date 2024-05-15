"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import { Divider } from "./components/divider/Divider";
import { Icon } from "./components/icons/Icon";
import { items } from "./data";
import { useIsVisible } from "./hooks/useIsVisible";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1024px] h-screen mx-auto snap-y snap-mandatory snap-always scroll-smooth overflow-hidden overflow-scroll no-scrollbar">
        <div className="relative flex flex-col justify-center items-center gap-8 snap-start pt-24 w-full h-screen shrink-0">
          <Icon
            type="leaves"
            className="absolute w-1/4 h-1/4 md:w-1/5 md:h-1/5 top-5 left-5 z-0 rotate-180"
          />
          <Icon
            type="leaves"
            className="absolute w-1/4 h-1/4 md:w-1/5 md:h-1/5 top-5 right-5 z-0 rotate-180 -scale-x-100"
          />
          <div className="relative font-parisienne flex flex-col items-center justify-center gap-20">
            <h1 className="text-9xl animate-slideindown">Tina</h1>
            <div className="absolute top-[-4] z-[-1] text-[25rem] font-black text-white drop-shadow-lg animate-fadein">
              &
            </div>
            <h1 className="text-9xl animate-slideinup">Filip</h1>
          </div>
          <div className=" text-lg md:text-xl delay-700 animate-slideinup">
            Vas pozivaju na svoje vjenčanje
          </div>
        </div>
        <Divider />
        <div
          ref={ref1}
          className="flex flex-col items-center justify-center gap-8 h-screen shrink-0 snap-start"
        >
          <div
            className={`flex-1 flex flex-col items-center justify-end gap-12 ${isVisible1 ? "visible animate-fadein" : "invisible"}`}
          >
            <Icon type="calendar" />
            <p className="text-2xl md:3xl">29.06.2025.</p>
          </div>
          <div
            className={`font-serif flex-1 flex items-center text-2xl md:text-5xl ${isVisible1 ? "visible delay-100 animate-slideinup" : "invisible"}`}
          >
            za 20 dana 30 sati 24 minuta
          </div>
        </div>
        <Divider />
        <div
          ref={ref3}
          className="flex flex-col items-center justify-center gap-8 h-screen shrink-0 snap-start py-12"
        >
          <div className="relative w-auto h-auto">
            <Image
              src={"/img/villa-gala.jpeg"}
              width={1280}
              height={720}
              className={`flex-auto flex w-full aspect-video object-cover shadow-md ${isVisible3 ? "visible animate-slideindown" : "invisible"}`}
              alt={"Villa Gala"}
            />
            <div
              className={`absolute top-[30%] left-[10%] bg-white p-8 opacity-150 flex-auto flex flex-col items-center justify-center gap-8 ${isVisible3 ? "visible animate-slideinup" : "invisible"}`}
            >
              <h3 className=" font-parisienne text-5xl font-bold">
                Villa Gala
              </h3>
              <a href="#">Upute -&gt;</a>
            </div>
          </div>
        </div>
        <Divider />
        <div
          ref={ref3}
          className="flex flex-col items-center justify-center gap-8 h-screen shrink-0 snap-start py-12"
        >
          <Image
            src={"/img/villa-gala.jpeg"}
            width={1280}
            height={720}
            className={`flex-auto flex w-full aspect-video object-cover shadow-md ${isVisible3 ? "visible animate-slideindown" : "invisible"}`}
            alt={"Villa Gala"}
          />
          <div
            className={`flex-auto flex flex-col items-center justify-center gap-8 ${isVisible3 ? "visible animate-slideinup" : "invisible"}`}
          >
            <h3 className=" font-parisienne text-5xl font-bold">Villa Gala</h3>
            <a href="#">Upute -&gt;</a>
          </div>
        </div>
        <Divider />
        <div
          ref={ref4}
          className="flex flex-col w-full min-h-screen items-center justify-start m-auto py-12 snap-start shrink-0 overflow-scroll no-scrollbar"
        >
          {items.map((item, idx) => {
            const { type, title, time } = item;
            return (
              <div
                key={`${title}-${idx}`}
                className={`flex ${idx % 2 == 0 ? "flex-row" : "flex-row-reverse"} w-full h-40`}
              >
                <div
                  className={`flex-1 h-full flex ${idx % 2 == 0 ? "flex-row" : "flex-row-reverse"} justify-center items-center gap-2`}
                >
                  <div
                    className={`flex-1 h-full flex flex-col justify-center items-center m-auto gap-2 ${isVisible4 ? (idx % 2 == 0 ? "visible animate-slideinleft" : "visible animate-slideinright") : "invisible"}`}
                  >
                    <Icon type={type} />
                    <h4>{title}</h4>
                    <p>{time}</p>
                  </div>
                  <div
                    className={`w-1/3 flex-none h-1 bg-slate-700 rounded-lg ${isVisible4 ? (idx % 2 == 0 ? "visible animate-slideinleft" : "visible animate-slideinright") : "invisible"}`}
                  ></div>
                </div>
                <div className="flex-none flex flex-col w-1 h-full relative">
                  <div className="flex-1 h-full bg-slate-700"></div>
                  <div className="flex-1 h-full bg-slate-700"></div>
                  <div
                    className={`w-3 h-3 bg-slate-900 rotate-45 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 ${isVisible4 ? "visible animate-fadein" : "invisible"}`}
                  ></div>
                </div>
                <div className="flex-1 h-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
