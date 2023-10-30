import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yello" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="1rem"
      borderRadius=".25rem"
      fontWeight="bold"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
