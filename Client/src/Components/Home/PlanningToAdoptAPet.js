import React from 'react';
import Card from "./Card";

const PlanningToAdoptAPet = () => {
  return (
    <div className='planning-container'>
        <h1>Planning to Adopt a Pet?</h1>
        <div className='boxes-container'>
            <Card title="The Joy of Pet Adoption" description="Adopting a pet brings immense joy and companionship, filling your home with love and laughter. The bond formed through adoption is incredibly rewarding, offering both emotional fulfillment and a new best friend."/>
            <Card title="A Guide to Pet Adoption" description="Are you considering adding a new pet to your family? Pet adoption is a wonderful option to consider. The journey of finding the ideal companion involves careful thought, research, and planning, but the rewards are immeasurable. "/>
            <Card title="Healing Power of Animal" description="Animals offer unconditional love and comfort, helping to alleviate stress and anxiety through their presence and affection. The companionship of a pet can significantly boost mental well-being, providing emotional support and a sense of purpose."/>
        </div>
    </div>
  )
}

export default PlanningToAdoptAPet;