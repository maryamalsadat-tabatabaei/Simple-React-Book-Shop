import { useRoomContext } from "../context";
import defaultBcg from "../images/defaultBcg.jpg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link, useParams } from "react-router-dom";
import defaultImg from "../images/details-1.jpg";

const SingleProduct = () => {
  const context = useRoomContext();
  const { getRoom } = context;
  const { slug } = useParams();

  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such bookcould be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to books
        </Link>
      </div>
    );
  }

  const [mainImg, ...defaultImg] = room.images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${room.name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to books
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => (
            <img key={index} src={defaultImg} alt={room.name} />
          ))}
        </div>
        <div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{room.description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${room.price}</h6>
              <h6>pages : ${room.size}</h6>
              <h6>
                max capacity :{" "}
                {room.capacity > 1
                  ? `${room.capacity} people`
                  : `${room.capacity} person`}
              </h6>
              <h6>{room.pets > 1 ? "Audio available" : "no audio available"}</h6>
              <h6>{room.breakfast && "free E-book included"}</h6>
            </article>
          </div>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {room.extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default SingleProduct;
