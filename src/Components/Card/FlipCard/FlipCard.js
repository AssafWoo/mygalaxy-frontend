import React, { useState } from "react";
import { Image, Box, Button, List, ListItem, Text } from "@chakra-ui/react";
import {
  ButtonShadow,
  FlipCardBack,
  FlipCardContainer,
  FlipCardFront,
  FlipCardInner,
} from "./Style";
import { Black, MainYellow } from "../../../Styles/Colors";

const FlipCard = ({ imageUrl, listItems, genderIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const renderItemContent = (item) => {
    if (typeof item === "string" && item.includes("Gender")) {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text as="span" marginRight="2">
            Gender:
          </Text>
          {genderIcon}
        </Box>
      );
    }
    return item;
  };

  return (
    <FlipCardContainer>
      <FlipCardInner className={isFlipped ? "flipped" : ""}>
        <FlipCardFront>
          <Image
            src={imageUrl}
            alt="Card Image"
            boxSize="100%"
            objectFit="contain"
          />
          <Button
            onClick={handleFlip}
            background={MainYellow}
            colorScheme="yellow"
            position="absolute"
            bottom="0.625rem"
            left="50%"
            width="80%"
            borderRadius="1.5625rem"
            boxShadow={ButtonShadow}
            transform="translateX(-50%)"
          >
            Flip
          </Button>
        </FlipCardFront>
        <FlipCardBack>
          <Box p={4}>
            <List>
              {listItems.map((item, index) => (
                <ListItem key={index}>{renderItemContent(item)}</ListItem>
              ))}
            </List>
            <Button
              onClick={handleFlip}
              background={Black}
              colorScheme="black"
              color={MainYellow}
              position="absolute"
              bottom="0.625rem"
              left="50%"
              width="80%"
              borderRadius="1.5625rem"
              boxShadow={ButtonShadow}
              transform="translateX(-50%)"
            >
              Flip
            </Button>
          </Box>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
};

export default FlipCard;
