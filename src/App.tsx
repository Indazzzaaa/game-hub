import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // 2x1
        lg: `"nav nav" "aside main"`, //2x2
      }}
      templateColumns={{
        base: "1f", // in base only 1 column we have
        lg: "200px 1fr", // in large deviced we have two columns
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
