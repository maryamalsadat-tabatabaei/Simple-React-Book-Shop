import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Book Lovers" subitle="Join us">
          <Link to="/rooms" className="btn-primary">
            our books
          </Link>
        </Banner>
      </Hero>

      <FeaturedRooms />
    </>
  );
}
