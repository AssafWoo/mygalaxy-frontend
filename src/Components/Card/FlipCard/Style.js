import styled from "styled-components";
import { MainYellow } from "../../../Styles/Colors";

export const FlipCardContainer = styled.div`
  perspective: 62.5rem;
  width: 18.75rem;
  height: 27rem;
  margin: auto;
  @media (max-width: 48rem) {
    width: 15.625rem;
    height: 21.875rem;
  }
  border-radius: 1.5625rem;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FlipCardFront = styled(CardFace)`
  background: white;
  border-radius: 1.5625rem;
`;

export const FlipCardBack = styled(CardFace)`
  transform: rotateY(180deg);
  border-radius: 1.5625rem;
  background: ${MainYellow};
`;

export const ButtonShadow = "17px 10px 22px -9px rgba(0,0,0,0.2)";
