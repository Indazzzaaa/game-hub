import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
      borderRadius=".25rem"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
