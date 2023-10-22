import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 bg-gray-900">
        <div>
            <Sidebar apiLimitCount={apiLimitCount}/>
        </div>
      </div>
      <main className="md:pl-72"><Navbar/> {children}</main>
    </div>
  );
};

export default DashboardLayout;
