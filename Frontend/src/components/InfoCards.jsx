import React from 'react'
import { IoPricetagOutline } from 'react-icons/io5';
import { LiaAwardSolid } from 'react-icons/lia';
import { RiEarthFill } from 'react-icons/ri';

const Card = ({ title, icon, text }) => {
  return (
    <div className="ml-auto mr-auto mt-10 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white rounded-lg p-6 h-full shadow-xl flex flex-col items-center justify-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-center">{text}</p>
      </div>
    </div>
  );
};

const InfoCards = () => {
  const cardsData = [
    {
      title: 'Competetive Pricing',
      icon: <IoPricetagOutline />,
      text: 'With 500+ suppliers and the purchasing power of 300 million members',
    },
    {
      title: 'Award Winning Service',
      icon: <LiaAwardSolid />,
      text: 'Fabulous Travel worry-free knowing that we are here if you need us, 24 hours a day',
    },
    {
      title: 'All India Coverage',
      icon: <RiEarthFill />,
      text: '500+ hotels in more than 50+ regions & many more.',
    },
  ];

  return (
    <div className="flex justify-center mx-2 flex-wrap">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default InfoCards;
