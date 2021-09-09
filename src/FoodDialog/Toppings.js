import styled from "styled-components";
import React from "react";

const ToppingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingsCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.div`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingsGrid>
      {toppings.map((topping, i) => (
        <CheckboxLabel>
          <ToppingsCheckbox
            type="checkbox"
            checked={topping.checked}
            onClick={() => {
              checkTopping(i);
            }}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingsGrid>
  );
}
