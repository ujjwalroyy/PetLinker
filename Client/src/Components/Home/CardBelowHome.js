import React from 'react';
import HomeDarkCardLeftPic from "./images/homepageDog.png";
import HomeDarkCardRightPic from "./images/file.png";

const formatNumber = (number) => {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + number).length / 3);
    const shortNumber = parseFloat((number / Math.pow(1000, suffixNum)).toFixed(1));
    return shortNumber >= 1 ? `${shortNumber}${suffixes[suffixNum]}${"+"}` : number.toString();
  };

const CardBelowHome = () => {
    const adoptedPets = formatNumber(1212);
  return (
    <div className='dark-grey-container'>
      <div className='right-pic'><img src={HomeDarkCardLeftPic} alt="Dog with toy"/></div>
      <div className='right-para'><p><p className='we-do'>{adoptedPets}</p> Pets are not our whole life, but they make our lives whole.</p></div>
      <div className='right-pic'><img src={HomeDarkCardRightPic} alt="Dog pic" /></div>
      <div className='right-para'><p className='we-do'></p>Adopting one dog won't change the world, but it will change the world for that one dog.</div>
    </div>
  )
}

export default CardBelowHome;