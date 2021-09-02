export const foodItem = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.jpg",
    section: "Pizza",
  },
  {
    name: "Peperoni Pizza",
    img: "/img/pizza2.jpg",
    section: "Pizza",
  },
  {
    name: "Burger",
    img: "/img/burger.jpg",
    section: "Sandwitch",
  },
  {
    name: "Chicken Fingers",
    img: "/img/chicken-fingers.jpg",
    section: "Sides",
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpg",
    section: "Pizza",
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides",
  },
  {
    name: "Healthy Pizza",
    img: "/img/healthy-pizza.jpg",
    section: "Pizza",
  },
  {
    name: "Sandwitch",
    img: "/img/sandwitch.jpg",
    section: "Sandwitch",
  },
  {
    name: "Gyro",
    img: "/img/gyro.jpg",
    section: "Sandwitch",
  },
];

export const foods = foodItem.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
