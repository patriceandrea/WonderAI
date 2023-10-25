"use client"; 

import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";


import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import SideBar from "./sidebar";
import { useState, useEffect } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({apiLimitCount}:MobileSidebarProps) => {

//stops the hydration error
const [isMounted, setIsMounted] = useState(false)

useEffect(() => {   
    setIsMounted(true)
}
, [])

if (!isMounted) {
    return null
}

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SideBar apiLimitCount={apiLimitCount}/>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
