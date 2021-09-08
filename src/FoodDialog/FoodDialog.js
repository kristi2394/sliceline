import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";

const Dialog = styled.div`
  max-width: 700px;
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 9999999;
  top: 75px;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-height: calc(100% - 100px);
  dispaly: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0 40px;
`;

export const DialogFooter = styled.div`
  height: 60px;
  box-shadow: 0px -2px 10px 0px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const ConfirmButton = styled(Title)`
  max-width: 200px;
  width: 100%;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  background: ${pizzaRed};
  padding: 10px;
  height: 20px;
  cursor: pointer;
`;

const DialogShadow = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 999999;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 74px 43px -17px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 74px 43px -17px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 74px 43px -17px rgba(0, 0, 0, 0.75) inset;
`;

const DialogTitle = styled(Title)`
  padding: 15px;
  font-size: 20px;
  color: #fff;
`;

export function getThePrice(order) {
  return order.quantity * order.price;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);

  function close() {
    setOpenFood();
  }
  const order = {
    ...openFood,
    quantity: quantity.value,
  };

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return (
    <>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogTitle>{openFood.name}</DialogTitle>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add To Order: {formatPrice(getThePrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
      <DialogShadow onClick={close} />
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
