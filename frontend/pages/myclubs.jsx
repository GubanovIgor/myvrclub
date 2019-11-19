import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// import AC
import { getClubsAC } from '../redux/actions/clubs';

// import components
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';
import Carousel from '../components/Carousel';
import ReservPopup from '../components/reservation/ReservPopup';

// Styled Components
import { WhiteContainer } from '../stylesheets/index';

const MyClubs = (props) => {

  useEffect(() => {
    dispatch(getClubsAC())
  }, [])

  const clubs = useSelector(state => state.clubs)
  const screenMode = useSelector(state => state.screenMode)
  const dispatch = useDispatch();

  return (
    <div>
      <Header/>
      {(clubs.length !== 0) && <ReservPopup status={true} club={clubs[0]}/>}
    </div>
  );
}

export default MyClubs;