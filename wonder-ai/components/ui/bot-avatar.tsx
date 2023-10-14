import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

type Props = {};

const BotAvatar = (props: Props) => {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage  src="/logo.jpg" />
    </Avatar>
  );
};

export default BotAvatar;
