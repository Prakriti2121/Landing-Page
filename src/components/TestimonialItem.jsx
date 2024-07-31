import React from 'react';

const TestimonialItem = ({ imgSrc, name, text }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
      <img src={imgSrc} className="w-16 -mt-14 size-14 rounded-full object-cover" alt={name} />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{text}</p>
    </div>
  );
};

export default TestimonialItem;
