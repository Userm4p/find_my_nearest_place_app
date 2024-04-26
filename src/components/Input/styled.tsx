import styled from "styled-components";
import { Colors } from "../../utils/enums/Colors";

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${Colors.Primary80};
  width: 410px;
  outline: none;
  color: ${Colors.Black};
  background-color: ${Colors.Light};

  &:focus {
    border-color: ${Colors.Primary80};
  }

  &::placeholder {
    color: ${Colors.Primary40};
  }

  @media (max-width: 1024px) {
    width: 320px;
  }
`;
