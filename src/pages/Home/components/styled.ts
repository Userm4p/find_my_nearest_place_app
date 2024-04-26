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
    background-color: ${Colors.Grey};
    color: ${Colors.Light};
  }
`;

export const NearestCityItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${Colors.Light};
  background-color: ${Colors.Primary100};
  border-bottom: 1px solid ${Colors.Primary80};
`;

export const NearestCitiesEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: ${Colors.Light};
  background-color: ${Colors.Primary100};
  height: calc(168px - 16px);

  span {
    text-align: center;
  }
`;

export const CitiesToTableEmpty = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${Colors.Primary100};
  background-color: ${Colors.Light};
  text-align: center;
  height: calc(168px - 16px);
`;
