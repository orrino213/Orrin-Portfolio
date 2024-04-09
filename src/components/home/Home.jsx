import MyCarousel from "./carousel/Carousel";
import AboutUs from "../aboutus/AboutUs";

function Home() {
  return (
    <div>
      <h1 className="title">ORBEL THE LOAN OFFICER</h1>
      <h5 className="mission">
        "My mission is to empower individuals & families with personalized
        mortgage solutions because homeownership is the catalyst for freedom,
        stability and wealth!"
      </h5>
      <MyCarousel />
      <AboutUs />
    </div>
  );
}

export default Home;
