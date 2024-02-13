import React from "react";
import BookingCard from "./BookingCard";

const Cardsbottom = ({ data }) => {
  return (
    <div className="flex flex-wrap p-10 gap-7 w-4xl items-center overflow-hidden mx-auto">
      {data.map((e, index) => (
        <BookingCard key={index} cardData={e} />
      ))}
    </div>
  );
}

export default Cardsbottom;
