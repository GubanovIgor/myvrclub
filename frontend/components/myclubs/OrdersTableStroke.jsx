import { useState } from "react";

// Styled Components
import {
  OrdersTableStrokeWrapper,
  OrdersTableCell,
  Buttons,
  Confirm,
  Cancel,
} from "./styles/myclubs";

const OrdersTableStroke = props => {
  console.log(props.order);
  const { order } = props;
  return (
    <OrdersTableStrokeWrapper>
      {Object.keys(order).map(el => {
        if (el === "date" || el === "phone" || el === "name" || el === "sum") {
          return <OrdersTableCell>{order[el]}</OrdersTableCell>;
        }
        if (el === "time") {
          return <OrdersTableCell>
            {order[el].map(time => <div>{time}</div>)}
          </OrdersTableCell>;
        }
      })}
      <OrdersTableCell>
        <Confirm onClick={() => useTest(6)}>ok</Confirm> 
      </OrdersTableCell>
      <OrdersTableCell>
        <Cancel onClick={() => props.handleDeleteOrder(props.orderId)} />
      </OrdersTableCell>
    </OrdersTableStrokeWrapper>
  );
};

export default OrdersTableStroke;
