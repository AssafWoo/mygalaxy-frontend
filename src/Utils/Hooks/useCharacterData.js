import { useQuery } from "react-query";
import { fetchData } from "../fetch";

export function useCharacterData(characterName) {
  const characterQueryKey = ["character", characterName.toLowerCase()];
  const {
    data: characterData,
    isLoading: isCharacterLoading,
    error: characterError,
  } = useQuery(
    characterQueryKey ,
    () => fetchData("character", { characterName }),
    {
      keepPreviousData: true,
      staleTime: 60 * 1000,
      cacheTime: 60 * 1000,
    }
  );

  const {
    data: homeworldData,
    isLoading: isHomeworldLoading,
    error: homeworldError,
  } = useQuery(
    ["homeworld", characterData?.results[0]?.homeworld],
    () => fetchData("homeworld", { url: characterData.results[0].homeworld }),
    {
      enabled: !!characterData?.results[0]?.homeworld,
      staleTime: 60 * 1000,
    }
  );

  return {
    characterData,
    isCharacterLoading,
    characterError,
    homeworldData,
    isHomeworldLoading,
    homeworldError,
  };
}
