import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// import AC
import { getClubsAC } from '../redux/actions/clubs';

// import components
import Header from '../components/Header';
import ClientCard from '../components/myclubs/ClientCard';
import ReservPopup from '../components/reservation/ReservPopup';

const MyClubs = (props) => {

  useEffect(() => {
    dispatch(getClubsAC())
  }, [])

  const clubs = useSelector(state => state.clubs)
  const dispatch = useDispatch();

  return (
    <div>
      <Header/>
      {/* {(clubs.length !== 0) && <ReservPopup status={true} club={clubs[0]}/>} */}
      <ClientCard/>
    </div>
  );
}

export default MyClubs;