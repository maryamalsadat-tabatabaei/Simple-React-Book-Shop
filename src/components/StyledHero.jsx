import defaultImg from "../images/details-1.jpg";

const StyledHero = (props) => {
  const { img } = props;
  const backgroundImage = img ? `url(${img})` : `url(${defaultImg})`;

  const heroStyle = {
    minHeight: "60vh",
    background: `${backgroundImage} center/cover no-repeat`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <header className="styled-hero" style={heroStyle} />;
};

export default StyledHero;
