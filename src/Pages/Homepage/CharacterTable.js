import React from "react";
import DynamicTable from "../../Components/Table/Table";
import { Skeleton } from "@chakra-ui/react";
import { useCharacterData } from "../../Utils/Hooks/useCharacterData";
import { getColumns } from "./Columns";

const CharacterTable = ({ characterName }) => {
  const {
    characterData,
    isCharacterLoading,
    characterError,
    homeworldData,
    isHomeworldLoading,
    homeworldError,
  } = useCharacterData(characterName);

  if (isCharacterLoading)
    return (
      <Skeleton
        width="100%"
        height="3.125rem"
        marginBottom="0.625rem"
        borderRadius="0.9375rem"
      />
    );
  if (characterError || homeworldError)
    return <div>Error: {characterError.message}</div>;

  const characterColumns = getColumns(characterData, isHomeworldLoading);
  const tableData = characterData?.results?.map((item) => ({
    ...item,
    homeworld: homeworldData ? homeworldData.name : "Unknown",
  }));
  return <DynamicTable columns={characterColumns} data={tableData || []} />;
};

export default CharacterTable;
