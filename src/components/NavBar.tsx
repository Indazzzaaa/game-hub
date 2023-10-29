import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding=".5rem">
      <Image src={logo} boxSize="60px" alt="Logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
