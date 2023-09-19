import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import SideBar from "./sidebar";

type Props = {};

const MobileSidebar = (props: Props) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SideBar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
