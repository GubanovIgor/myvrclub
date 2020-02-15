import { useState } from "react";

// Styled Components
import { OrdersTableHeadWrapper, OrdersTableCell } from './styles/myclubs'

const OrdersTableHead = props => {
  return <OrdersTableHeadWrapper>
    {props.data.map(item => {
      return <OrdersTableCell>{item}</OrdersTableCell>
    })}
  </OrdersTableHeadWrapper>;
};

export default OrdersTableHead;