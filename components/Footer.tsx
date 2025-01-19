import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button"; 
import { DiscordIcon, TelegramIcon, TwitterIcon } from "@/assests/svgs";
import { LINKS, LandingPageLinks } from "./config";

const Footer = () => {
  return (
    <div className="flex flex-col mt-20">
      {/* Upper Footer */}
      <div className="middle flex flex-row justify-between px-4 xl:px-0">
        <div className="flex flex-col gap-5">
          <Link href="/">
            <div className="flex flex-row items-center gap-1">
              <Image src="/logo.png" alt="Robolox" width={40} height={40} />
              <span className="text-xl font-bold PoseidonFont">Cosmic Boosts</span>
            </div>
          </Link>
          <div className="max-w-[550px] text-sm text-brandGray">
            {`Cosmic Boosts is a Discord shop that sells high-quality Discord boosts, tools, and more. We offer a wide range of services to help you grow your community.`}
          </div>
          <div className="text-sm font-semibold brand_gradient text-transparent bg-clip-text text-brand">
            {`Cosmic Boosts is not affiliated or endorsed by Discord in any way.`}
          </div>
          <div className="mt-3 flex flex-row items-center gap-2">
            <Link href={LINKS?.DISCORD} target="_blank">
              <Button
                variant={"outline"}
                className="flex flex-row items-center gap-2"
              >
                <DiscordIcon className="h-[18px] w-[18px]" />
              </Button>
            </Link>
            <Link href={LINKS?.TWITTER} target="_blank">
              <Button
                variant={"outline"}
                className="flex flex-row items-center gap-2"
              >
                <TwitterIcon className="h-[18px] w-[18px]" />
              </Button>
            </Link>
            <Link href={LINKS?.TELEGRAM} target="_blank">
              <Button
                variant={"outline"}
                className="flex flex-row items-center gap-2"
              >
                <TelegramIcon className="h-[18px] w-[18px]" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden h-full w-[100px] flex-col gap-2 sm:flex">
          <div className="ml-1 font-semibold">Links</div>
          <div className="flex flex-col gap-2 text-sm text-brandGray">
            {LandingPageLinks?.map((link, index) => (
              <Link href={link?.link} key={index}>
                <div className="flex cursor-pointer flex-row items-center gap-1 duration-200 hover:text-white">
                  <ChevronRight className="w-4" />
                  <span>{link?.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="my-4 border-t border-brandGray border-opacity-20 "></div>
      {/* Bottom Footer */}
      <div className="middle flex flex-row items-center justify-between px-4 pb-6 pt-2 xl:px-0">
        <div className="text-sm text-muted-foreground">
          &copy; ZenBoosts 2024-2025
        </div>
        <Link href="https://discord.com/users/734067467848253520" target="_blank">
          <div className="flex cursor-pointer flex-col rounded-md px-2 py-2">
            <div className="relative z-10 text-[11px] leading-[14px]">
              Developed By
            </div>
            <div className="relative font-bold leading-[16px] text-[#ec3d6f]">
              <div className="absolute left-0 top-0 h-full w-full bg-[#ec3d6f] opacity-70 blur-lg" />
              <div className="relative z-10">{`Potato.Service`}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
