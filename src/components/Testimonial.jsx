import React from 'react';
import TestimonialItem from './TestimonialItem';
import Button from '../components/Button';

const testimonialData = [
  {
    imgSrc: 'src/assets/Ava.png',
    name: 'Ava Lee',
    text: '“Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
  },
  {
    imgSrc: 'src/assets/ruby.png',
    name: 'Ruby Lane',
    text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
  },
  {
    imgSrc: 'src/assets/Max.png',
    name: 'Max Hart',
    text: '“Manage has supercharged our team\'s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What makes Manage unique?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonialData.map((item, index) => (
            <TestimonialItem
              key={index}
              imgSrc={item.imgSrc}
              name={item.name}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="my-16 flex justify-center">
          <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default Testimonial;
