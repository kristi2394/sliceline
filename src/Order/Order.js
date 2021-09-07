import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";

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
  padding: 10px 0;
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders }) {
  return (
    <>
      <OrderStyled>
        {orders.length === 0 ? (
          <OrderContent>Your order's looking pretty empty!</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Your Order :</OrderContainer>
            {orders.map((order) => (
              <OrderContainer>
                <OrderItem>
                  <div>1</div>
                  <div>{order.name}</div>
                  <div>{formatPrice(order.price)}</div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <DialogFooter>
          <ConfirmButton>Checkout</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}