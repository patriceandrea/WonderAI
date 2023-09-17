"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Music2Icon, Settings, VideoIcon } from "lucide-react";

type Props = {};

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conservation",
    color: "text-violet-500",
  },
  {
    label: "Generate Image",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Generate Video",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Generate Music",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generator",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings"
  },
];

const SideBar = (props: Props) => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="WonderAI Logo" src="/logo.jpg" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            WonderAI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label} 
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;