import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Black, MainYellow } from "../../Styles/Colors";

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Button
      onClick={goBack}
      background={Black}
      colorScheme="black"
      borderRadius="1.5625rem"
      position="absolute"
      top="0"
      left="0"
    >
      <IoIosArrowBack color={MainYellow} size="1.5rem" />
    </Button>
  );
};

export default BackButton;
