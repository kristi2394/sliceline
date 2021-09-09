import { useState } from "react";

export function useToppings(defaultToppings) {
  const [toppings, setToppings] = useState(
    defaultToppings || getDefaultToppings
  );
  function checkTopping(index) {
    const newTopping = [...toppings];
    newTopping[index].checked = !newTopping[index].checked;
    setToppings(newTopping);
  }

  return {
    checkTopping,
    toppings,
  };
}

const toppingsList = [
  "Extra Cheese",
  "Pepperoni",
  "Sausage",
  "Onion",
  "Peppers",
  "Pineapple",
  "Ham",
  "Spinach",
  "Artichokes",
  "Mushrooms",
  "Anchovies",
];

function getDefaultToppings() {
  return toppingsList.map((topping) => ({
    name: topping,
    checked: false,
  }));
}
