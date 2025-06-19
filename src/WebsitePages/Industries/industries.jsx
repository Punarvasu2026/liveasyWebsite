//External Libraries
import React from "react";

//Components
import Navbar from "../../components/navbar";
import IndustriesWeServe from "../../components/Industries/industries-we-serve";
import IndustriesChallenges from "../../components/Industries/industries-challenges";
import Footer from "../../components/footer";

const Industries = () => {
  return (
    <>
      <Navbar />
      <IndustriesWeServe />
      <IndustriesChallenges />
      <Footer />
    </>
  );
};

export default Industries;
