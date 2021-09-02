import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const Food = styled(Title)`
  height: 100px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 15px;
  font-size: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 10px 0px grey;
  z-index: 1;
  color: #fff;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
