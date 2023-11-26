import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueries } from "react-query";
import { fetchData } from "../../Utils/fetch";
import { Box, Spinner, Text } from "@chakra-ui/react";
import FlipCard from "../../Components/Card/FlipCard/FlipCard";
import { planetImages } from "./HomeWorldsData";
import { MainYellow } from "../../Styles/Colors";
import { formatNumberWithCommas } from "../../Utils/formatNumberWithCommas";

const Homeworld = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);
  const {
    data: homeworld,
    isLoading,
    error,
  } = useQuery(
    ["homeworld", decodedUrl],
    () => fetchData("homeworld", { url: decodedUrl }),
    { keepPreviousData: true, staleTime: 60 * 1000, cacheTime: 60 * 1000 }
  );

  const residentQueries = homeworld?.residents
    ?.slice(0, 3)
    .map((residentUrl) => ({
      queryKey: ["resident", residentUrl],
      queryFn: () => fetchData("homeworld", { url: residentUrl }),
      options: {
        staleTime: 60 * 1000,
        cacheTime: 60 * 1000,
      },
    }));

  const residents = useQueries(residentQueries || []);
  if (isLoading) return <Spinner color={MainYellow} />;
  if (error) return <div>Error: {error.message}</div>;

  const homeworldDetails = [
    { label: "Name", value: homeworld.name },
    {
      label: "Population",
      value: formatNumberWithCommas(homeworld.population),
    },
    { label: "Day Length", value: homeworld.rotation_period, prefix: "H" },
    { label: "Year Length", value: homeworld.orbital_period, prefix: "D" },
    { label: "Gravity", value: homeworld.gravity },
    { label: "Climate", value: homeworld.climate },
    { label: "Terrain", value: homeworld.terrain },
    { label: "Diameter", value: homeworld.diameter },
    { label: "Water Coverage", value: homeworld.surface_water },
  ];

  const residentNames = residents.map((residentQuery, index) =>
    residentQuery.isLoading
      ? "Loading..."
      : residentQuery.error
      ? "Error"
      : residentQuery.data?.name
  );

  const homeworldDetailsWithBoldLabels = homeworldDetails.map((detail) => (
    <Box>
      <Text as="span" fontWeight="bold">
        {detail.label}:
      </Text>{" "}
      {detail.value} {detail.prefix || ""}
    </Box>
  ));

  return (
    <Box position="relative" p={5}>
      <FlipCard
        imageUrl={planetImages[homeworld.name]}
        listItems={[
          ...homeworldDetailsWithBoldLabels,
          <Text fontWeight="bold">Famous Residents:</Text>,
          ...residentNames.map((name) => <Text>{name}</Text>),
        ]}
      />
    </Box>
  );
};

export default Homeworld;
