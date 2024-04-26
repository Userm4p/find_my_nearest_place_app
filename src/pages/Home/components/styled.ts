import styled from "styled-components";
import { Colors } from "../../../utils/enums/Colors";

export const CityItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  color: ${Colors.Primary100};
  background-color: ${Colors.Light};

  &:hover {
    background-color: ${Colors.Primary20};
  }
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${Colors.Primary80};
  color: ${Colors.White};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Primary60};
  }

  &:disabled {
    background-color: ${Colors.Gray};
    color: ${Colors.Light};
  }
`;
