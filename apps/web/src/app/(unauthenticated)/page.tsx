"use client";

import { Button } from "@repo/ui/components/nextui/button";
import { Button as ShadcnButton } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/card";
import Image from "next/image";
import DefaultLayoutComponent from "@/components/layout/default";
import { SiteDefaultIcons, siteTitle } from "@/config/const";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${small ? "blur-[32px]" : "blur-[75px]"
        } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  );
}

const TECHS = [
  {
    title: "NEXTUI",
    href: "https://nextui.org/docs",
    description: "NextUI is a UI library for React that helps you build beautiful and accessible user interfaces.",
  },
  {
    title: "Shadcn-UI",
    href: "https://ui.shadcn.com/docs",
    description: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  },
  {
    title: "TURBO",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
];

// const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

export default function Web(): JSX.Element {

  return (
    <DefaultLayoutComponent>
      <main className="flex flex-col items-center justify-between flex-1">
        <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
          <p className="sticky top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl bg-primary from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 text-primary-foreground">
            {siteTitle} -&nbsp;
            <code className="font-mono font-bold">web</code>
          </p>
          <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="flex underline gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
              href="https://github.com/dragon1227"
              rel="noopener noreferrer"
              target="_blank"
            >
              By{" "}dragon1227
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center ">
          <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
            <div className="z-50 flex items-center justify-center w-full">
              <div className="absolute min-w-[614px] min-h-[614px]">
                <Image
                  alt="Turborepo"
                  height={614}
                  src="circles.svg"
                  width={614}
                />
              </div>
              <div className="absolute z-50 flex items-center justify-center w-64 h-64">
                <Gradient
                  className="opacity-90 w-[120px] h-[120px]"
                  conic
                  small
                />
              </div>

              <SiteDefaultIcons className="w-[120px] h-[120px] z-50" />
            </div>
            <Gradient
              className="top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
              conic
            />
            <div className="z-50 text-4xl uppercase flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
              {siteTitle}
            </div>
          </div>
        </div>

        <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {TECHS.map(({ title, href, description }) => (
            <Card href={href} key={title} title={title}>
              {description}
            </Card>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button color="primary" variant="solid">NextUI</Button>
            <ShadcnButton variant="default">Shadcn-UI</ShadcnButton>
          </div>
          <div className="flex items-center gap-2">
            <Button color="secondary" variant="solid">NextUI</Button>
            <ShadcnButton variant="secondary">Shadcn-UI</ShadcnButton>
          </div>
          <div className="flex items-center gap-2">
            <Button color="danger" variant="solid">NextUI</Button>
            <ShadcnButton variant="destructive">Shadcn-UI</ShadcnButton>
          </div>
        </div>
      </main>
    </DefaultLayoutComponent>
  );
}
