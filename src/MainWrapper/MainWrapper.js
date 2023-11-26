import Routes from "../Routes/Routes";
import { InnerWrapper, Shadow, Wrapper } from "../Styles/Styles";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Black } from "../Styles/Colors";
import BackButton from "../Components/Buttons/BackButton";
import Logo from "../Assets/starwars.png";
import { Link } from "react-router-dom";

const MainWrapper = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          background="transparent"
        >
          <Box
            w="100%"
            maxW="75rem"
            bg={Black}
            borderRadius="1.5625rem"
            position="relative"
            boxShadow={Shadow}
            padding="3rem"
          >
            <BackButton />
            <Box
              w="100%"
              maxW="75rem"
              padding="2rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link to="/">
                <Image src={Logo} width="10rem" />
              </Link>
            </Box>
            <Routes />
          </Box>
        </Flex>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MainWrapper;
