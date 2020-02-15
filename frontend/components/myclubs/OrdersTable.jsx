import { useState } from "react";

// Styled Components
import { OrdersTableWrapper } from './styles/myclubs'

// import Components
import OrdersTableHead from './OrdersTableHead'
import OrdersTableStroke from './OrdersTableStroke'

const thead = [
  'Время',
  'Дата',
  'Имя',
  'Телефон',
  'Сумма',
  'Очки',
  'Подтвердить',
  'Удалить'
]

const OrdersTable = props => {
  return <OrdersTableWrapper>
    <OrdersTableHead data={thead}/>
    {props.clubOrders.map(order => {
      return <OrdersTableStroke order={order} key={order._id}/>
    })}
  </OrdersTableWrapper>;
};

export default OrdersTable;
