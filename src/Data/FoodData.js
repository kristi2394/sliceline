export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItem = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.jpg",
    section: "Pizza",
    price: 6,
  },
  {
    name: "Peperoni Pizza",
    img: "/img/pizza2.jpg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Burger",
    img: "/img/burger.jpg",
    section: "Sandwitch",
    price: 1.5,
  },
  {
    name: "Chicken Fingers",
    img: "/img/chicken-fingers.jpg",
    section: "Sides",
    price: 2,
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides",
    price: 0.5,
  },
  {
    name: "Healthy Pizza",
    img: "/img/healthy-pizza.jpg",
    section: "Pizza",
    price: 1.5,
  },
  {
    name: "Sandwitch",
    img: "/img/sandwitch.jpg",
    section: "Sandwitch",
    price: 2.5,
  },
  {
    name: "Gyro",
    img: "/img/gyro.jpg",
    section: "Sandwitch",
    price: 3,
  },
];

export const foods = foodItem.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
