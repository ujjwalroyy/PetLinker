import React from "react";
import HomeLandingContainer from "./HomeLandingContainer";
import CardBelowHome from "./CardBelowHome";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";
import DetailCard from './DetailCard'

const Home = (props) => {
  return (
    <>
      <HomeLandingContainer description={props.description} />
      {/* <section id="cards" className="py-8 px-4 bg-gray-100"> */}
      <DetailCard/>
      {/* </section> */}
     
      {/* <CardBelowHome /> */}
      <PlanningToAdoptAPet />
    </>
  );
};

export default Home;
