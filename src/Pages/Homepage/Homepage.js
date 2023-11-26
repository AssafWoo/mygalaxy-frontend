import React, { useState } from "react";
import { TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { White } from "../../Styles/Colors";
import CharacterTable from "./CharacterTable";
import {
  CircleTab,
  MainPanel,
  ScrollableTabListContainer,
  StyledTabs,
} from "./Style";
import { charactersDetails } from "./TabOptions/TabOptions";

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tableVisible, setTableVisible] = useState(true);

  return (
    <>
      <StyledTabs
        index={tabIndex}
        onChange={(index) => {
          setTabIndex(index);
          setTableVisible(false);
          setTimeout(() => setTableVisible(true), 15);
        }}
      >
        <ScrollableTabListContainer>
          <TabList>
            {charactersDetails.map((character, index) => (
              <CircleTab
                key={character.name}
                isSelected={tabIndex === index}
              >
                {character.name}
              </CircleTab>
            ))}
          </TabList>
        </ScrollableTabListContainer>
        <MainPanel isVisible={tableVisible}>
          <TabPanels bg={White}>
            {charactersDetails.map((character, index) => (
              <TabPanel key={character.name}>
                {tabIndex === index && <CharacterTable characterName={character.name} />}
              </TabPanel>
            ))}
          </TabPanels>
        </MainPanel>
      </StyledTabs>
    </>
  );
};

export default HomePage;