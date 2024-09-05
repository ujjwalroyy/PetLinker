import React from "react";
import adoptPet from "./images/adoptPet.png";
import { Link } from "react-router-dom";

const AdoptSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="adopt-section">
      <h2>Adopt a Pet</h2>
      <img src={adoptPet} alt="Happy Pet" />

      <p>
      Welcome to our pet adoption program! Bringing a pet into your home is a fantastic way to add joy and companionship to your life.
      </p>

      <h3>Benefits of Pet Adoption</h3>
      <ul>
        <li>Offer a caring home to an animal in need.</li>
        <li>Discover the boundless affection of a pet.</li>
        <li>Build unforgettable memories and treasured moments.</li>
      </ul>

      <h3>Adoption Process</h3>
      <ol>
        <li>Submit an adoption application.</li>
        <li>Meet prospective pets face-to-face.</li>
        <li>Finalize the required paperwork.</li>
      </ol>

      <h3>Responsibilities</h3>
      <p>
      Adopting a pet involves important responsibilities, such as ensuring proper feeding, regular grooming, adequate exercise, and necessary medical care.
      </p>

      <Link to="/pets">
        <button className="cta-button" onClick={scrollToTop}>Find Your Pet</button>
      </Link>
    </section>
  );
};

export default AdoptSection;
