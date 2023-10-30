import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: "100vw", md: "48vw", lg: "30vw", xl: "18vw" }}
      borderRadius=".25rem"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
