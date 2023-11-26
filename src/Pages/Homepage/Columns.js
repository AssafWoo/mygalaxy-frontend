import { Link } from "react-router-dom";
import { IoPlanet, IoFemaleOutline } from "react-icons/io5";
import { IoIosMale } from "react-icons/io";
import { Button, Spinner } from "@chakra-ui/react";
import {
  Black,
  MainBlue,
  MainPink,
  MainPurple,
  MainYellow,
  White,
} from "../../Styles/Colors";
import { RiRobot2Line } from "react-icons/ri";
import { GrCircleInformation } from "react-icons/gr";

export const getColumns = (characterData, isHomeworldLoading) => {
  return [
    {
      Header: "Full name",
      accessor: "name",
    },
    {
      Header: "Height",
      accessor: "height",
      Cell: ({ value }) => <>{value} cm</>,
    },
    {
      Header: "Weight",
      accessor: "mass",
      Cell: ({ value }) => <>{value} kg</>,
    },
    {
      Header: "Gender",
      accessor: "gender",
      Cell: ({ value }) => {
        if (value === "male")
          return <IoIosMale color={MainBlue} size="1.5rem" />;
        if (value === "female")
          return <IoFemaleOutline color={MainPink} size="1.5rem" />;

        return <RiRobot2Line color={MainPurple} size="1.5rem" />;
      },
    },
    {
      Header: "Homeworld",
      accessor: "homeworld",
      Cell: ({ value }) => (
        <Link
          to={`/homeworld/${encodeURIComponent(
            characterData?.results[0]?.homeworld
          )}`}
        >
          {isHomeworldLoading ? (
            <Spinner color={MainYellow} />
          ) : (
            <Button
              background={MainYellow}
              colorScheme="yellow"
              color={Black}
              rightIcon={<IoPlanet />}
              borderRadius="1.5625rem"
            >
              {value}
            </Button>
          )}
        </Link>
      ),
    },
    {
      Header: "",
      accessor: "name",
      Cell: ({ value }) => (
        <Link to={`/character/${encodeURIComponent(value)}`}>
          <Button
            background={MainBlue}
            colorScheme="blue"
            color={White}
            rightIcon={
              <GrCircleInformation
                size="1.3rem"
                style={{ display: "inline" }}
              />
            }
            borderRadius="1.5625rem"
          >
            More Info
          </Button>
        </Link>
      ),
    },
  ];
};
