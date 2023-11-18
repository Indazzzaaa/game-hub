import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // 2x1
        lg: `"aside main"`, //2x2
      }}
      templateColumns={{
        base: "1f", // in base only 1 column we have
        lg: "200px 1fr", // in large deviced we have two columns
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="1rem">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={4}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />

            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
