import { createContext, useContext, useState, useEffect } from "react";
import bookItems from "./BookShop.json";

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  // getData
  const getData = async () => {
    try {
      // const response = await fetch("API_ENDPOINT");
      // const dataItems = await response.json();
      let roomsData = formatData(bookItems);
      let featuredRoomsData = roomsData.filter(
        (room) => room.featured === true
      );
      let maxPriceData = Math.max(...roomsData.map((item) => item.price));
      let minPriceData = Math.min(...roomsData.map((item) => item.price));
      let maxSizeData = Math.max(...roomsData.map((item) => item.size));

      setRooms(roomsData);
      setFeaturedRooms(featuredRoomsData);
      setSortedRooms(roomsData);
      setLoading(false);
      setPrice(maxPriceData);
      setMaxPrice(maxPriceData);
      setMaxSize(maxSizeData);
      setMinPrice(minPriceData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatData = (items) => {
    return items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
  };

  const getRoom = (slug) => {
    return rooms.find((room) => room.slug === slug);
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    // Update state using separate setters
    switch (name) {
      case "type":
        setType(value);
        break;
      case "capacity":
        setCapacity(parseInt(value));
        break;
      case "price":
        setPrice(parseInt(value));
        break;
      case "minSize":
        setMinSize(parseInt(value));
        break;
      case "maxSize":
        setMaxSize(parseInt(value));
        break;
      case "breakfast":
        setBreakfast(value);
        break;
      case "pets":
        setPets(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    filterRooms();
  }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

  const filterRooms = () => {
    let tempRooms = [...rooms];

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= price);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        getRoom,
        handleChange,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => {
  return useContext(RoomContext);
};

export { RoomProvider, RoomContext };
