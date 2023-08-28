import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import Loading from "./Loading";
import { useRoomContext } from "../context";

function RoomsContainer() {
  const context = useRoomContext();
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default RoomsContainer;

/*

import React from 'react'
import RoomsFilter from './roomsFilter'
import RoomsList from './roomsList'
import Loading from './Loading'
import { RoomConsumer } from '../context'

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {value =>{
                const{loading,sortedRooms,rooms}=value;
                if (loading){
                    return <Loading/>
                }
                return(
                    <div>
                        Hello from rooms RoomsContainer
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsumer>
        
    );
}
*/
