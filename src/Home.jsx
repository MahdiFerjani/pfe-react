import React from "react";
import web from "../src/images/home.svg";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Gérez la trésorerie de votre entreprise en toute simplicité avec "
        disc="Dans un contexte économique incertain, pilotez votre entreprise par la trésorerie grâce à des prévisions fiables et un suivi en temps réel."
        imgsrc={web}
        visit="/service"
        btname="Commencez!"
      />
    </>
  );
};

export default Home;