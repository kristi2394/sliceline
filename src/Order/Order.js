import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getThePrice } from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  max-width: 340px;
  width: 100%;
  right: 0;
  background-color: #fff;
  z-index: 10;
  height: calc(100% - 63px);
  top: 63px;
  position: fixed;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
  overflow: auto;
`;

const OrderContainer = styled.div`
  border-bottom: 1px solid grey;
  padding: 10px 5px;
  ${({ editable }) =>
    editable
      ? `&:hover{cursor: pointer; background: #e7e7e7}`
      : `pointer-events: none;`}
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;
const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`;
export function Order({ orders, setOrders, setOpenFood }) {
  console.log(orders);
  const subtotal = orders.reduce((total, order) => {
    return total + getThePrice(order);
  }, 0);
  const tax = subtotal * 0.2;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <>
      <OrderStyled>
        {orders.length === 0 ? (
          <OrderContent>Your order's looking pretty empty!</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Your Order :</OrderContainer>
            {orders.map((order, index) => (
              <OrderContainer editable>
                <OrderItem>
                  <div>{order.quantity}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOpenFood({ ...order, index });
                    }}
                  >
                    {order.name}
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteItem(index)}
                  >
                    🗑️
                  </div>
                  <div>{formatPrice(getThePrice(order))}</div>
                </OrderItem>
                <DetailItem>
                  {order.toppings
                    .filter((t) => t.checked)
                    .map((topping) => topping.name)
                    .join(", ")}
                  {order.choice && <DetailItem>{order.choice}</DetailItem>}
                </DetailItem>
              </OrderContainer>
            ))}
            <OrderContainer>
              <OrderItem>
                <div />
                <div>Sub-Total</div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Tax</div>
                <div>{formatPrice(tax)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Total</div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        )}
        <DialogFooter>
          <ConfirmButton>Checkout</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}
