import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";

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

export function Order({ orders }) {
  return (
    <>
      <OrderStyled>
        <OrderContent>
          {orders.length === 0 ? (
            <div>Your order's looking pretty empty!</div>
          ) : (
            <div>Found {orders.length} orders</div>
          )}

          {orders.map((order) => (
            <div>{order.name}</div>
          ))}
        </OrderContent>
        <DialogFooter>
          <ConfirmButton>Checkout</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}
