import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      width="100%"
      borderRadius=".25rem"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
