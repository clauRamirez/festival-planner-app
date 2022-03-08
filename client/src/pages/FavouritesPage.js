import React, { useContext } from "react";
import FavouritesDataContext from "../context/FavouritesDataContext";
import EventList from "../components/EventList";

const FavouritesPage = ({ onEventClick }) => {
  const { favouritesData, setFavouritesData } = useContext(
    FavouritesDataContext
  );

  if (favouritesData && favouritesData.length > 0) {
    // this maps throught favouritesData and appends .favourited to all of them so the heart icon renders red !
    favouritesData.forEach((favourite) => {
      if (!favourite.favourited) favourite.favourited = true;
    });
  }

  // get all favourite events from local storage still doesn't work :(
  // const getEventsFromLocalStorage = () => {
  //   const favourite = [];
  //   const keys = Object.keys(localStorage);

  //   keys.forEach((key) => {
  //     favourite.push(localStorage.getItem(key));
  //   });

  //   setFavouritesData(favourite);
  // };

  return (
    <EventList
      // context={favouritesData ? favouritesData : null}
      context={favouritesData ? favouritesData : null}
      onEventClick={onEventClick}
    />
  );
};

export default FavouritesPage;
