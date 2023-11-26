import React from "react";
import { useParams } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { IoFemaleOutline } from "react-icons/io5";
import { IoIosMale } from "react-icons/io";
import {
  MainBlue,
  MainPink,
  MainPurple,
  MainYellow,
} from "../../Styles/Colors";
import { RiRobot2Line } from "react-icons/ri";
import { useCharacterData } from "../../Utils/Hooks/useCharacterData";
import FlipCard from "../../Components/Card/FlipCard/FlipCard";
import { charactersDetails } from "../Homepage/TabOptions/TabOptions";

const Character = () => {
  const { characterName } = useParams();
  const {
    characterData,
    isCharacterLoading,
    characterError,
    homeworldData,
    isHomeworldLoading,
  } = useCharacterData(characterName);

  if (isCharacterLoading) return <Spinner color={MainYellow} />;
  if (characterError) return <div>Error: {characterError.message}</div>;

  const genderIcons = {
    male: <IoIosMale color={MainBlue} size="1.5rem" />,
    female: <IoFemaleOutline color={MainPink} size="1.5rem" />,
    "n/a": <RiRobot2Line color={MainPurple} size="1.5rem" />,
  };

  const genderIcon = genderIcons[characterData.results[0].gender];

  const dataWithIcons = [
    { key: "name", icon: "", label: "Name" },
    { key: "gender", label: "Gender" },
    {
      key: "homeworld",
      icon: "",
      label: "Planet",
      value: isHomeworldLoading ? (
        <Spinner color={MainYellow} />
      ) : (
        homeworldData.name
      ),
    },
    { key: "height", icon: "", label: "Height", prefix: "cm" },
    { key: "mass", icon: "", label: "Weight", prefix: "kg" },
    { key: "hair_color", icon: "", label: "Hair color" },
    { key: "eye_color", icon: "", label: "Eye color" },
    { key: "birth_year", icon: "", label: "Birth day" },
  ];
  const formattedListItems = dataWithIcons.map((item) => {
    const value = item.value || characterData.results[0][item.key];
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text as="span" fontWeight="bold">
          {item.label}:
        </Text>{" "}
        {value} {item.prefix || ""}
      </Box>
    );
  });
  const characterImage = charactersDetails.find(
    (character) => character.name === characterName
  );

  return (
    <Box position="relative" p={5}>
      <FlipCard
        imageUrl={characterImage.imageUrl}
        listItems={formattedListItems}
        genderIcon={genderIcon}
      />
    </Box>
  );
};

export default Character;
