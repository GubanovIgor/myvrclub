import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from "react-redux"
const moment = require("moment")

// import AC
import { getClubsAC } from '../redux/actions/clubs'

// StyledComponents
import { OrdersWrapper } from '../components/myclubs/styles/myclubs'

// import components
import Header from '../components/Header'
import ClientCard from '../components/myclubs/ClientCard'
import ReservPopup from '../components/reservation/ReservPopup'
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

// import thunks
import { getClubOrdersThunk, deleteClubOrderThunk } from '../redux/actions/personalAccount'

const MyClubs = (props) => {

  useEffect(() => {
    dispatch(getClubsAC())
  }, [])

  const clubs = useSelector(state => state.clubs)
  const dispatch = useDispatch();
  const [startDate, setDate] = useState(new Date());

  const getOrders = () => {
    
  }

  // Ручка выбора даты
  const handleChangeDate = date => {
    const currentDate = moment(date).format("DD-MM-YY");
    setDate(date)
    props.getClubOrders('5d909d94d164e411abfa7a76', currentDate)
  }

  // Ручка удаления заказа
  const handleDeleteOrder = (orderId) => {
    props.deleteClubOrder(orderId)
  }

  return (
    <div>
      <Header/>
      <DatePicker locale="ru" selected={startDate} onChange={(date) => handleChangeDate(date)}/>
      <OrdersWrapper>
        {props.clubOrders.map(order => {
          return <ClientCard
          key={order._id}
          time={order.time}
          name={order.name}
          phone={order.phone}
          sum={order.sum}
          headsets={order.headsets}
          orderId={order._id}
          handleDeleteOrder={handleDeleteOrder}/>
        })}
      </OrdersWrapper>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    clubOrders: store.clubOrders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClubOrders: (clubId, date) => dispatch(getClubOrdersThunk(clubId, date)),
    deleteClubOrder: (orderId) => dispatch(deleteClubOrderThunk(orderId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyClubs);
