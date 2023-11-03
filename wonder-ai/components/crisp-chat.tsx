"use client"; 

import { use, useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
useEffect(() => {
Crisp.configure("7cf5177e-add9-4bab-b111-dc71a879b15f")
}, []);

return null;
}; 