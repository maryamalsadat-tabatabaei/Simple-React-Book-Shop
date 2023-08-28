import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/roomsContainer";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our books" subitle="">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};
export default ProductList;
