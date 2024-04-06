import orbelHeadshot from "../../assets/orbelHeadshot.jpg";

function AboutUs() {
  return (
    <div className="headshot-container">
      <img className="headshot" src={orbelHeadshot} alt="orbleheadshot" />
      <div>
        <h1>About Orbel Sarkisian</h1>
        <p className="p">
          With over 8 years of dedicated experience in the real estate industry,
          Orbel Sarkisian has established himself as a trusted and successful
          realtor in the Southern California area. His passion for helping
          clients achieve their real estate goals, paired with his in-depth
          knowledge of the local market, has led to the successful funding of
          numerous homes.
        </p>
        <p className="p">
          Orbel's commitment to his clients is unparalleled, always putting
          their needs first and ensuring a smooth and seamless transaction
          process. Whether you're buying, selling, or investing in real estate,
          Orbel Sarkisian is your go-to realtor for personalized service and
          exceptional results.
        </p>
        <p className="p">
          Contact Orbel today to experience the difference a knowledgeable and
          dedicated realtor can make in your real estate journey.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
