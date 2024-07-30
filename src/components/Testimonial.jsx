import { Link } from "react-router-dom";
import Ava from "../assets/Ava.png";
import Ruby from "../assets/ruby.png";
import Zoe from "../assets/Zoe.png";
import Max from "../assets/Max.png";
import Button from '../components/Button';


const Testimonial = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
        What makes Manage unique?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src= '../src/assets/Ava.png' className="w-16 -mt-14 size-14 rounded-full object-cover" alt="" />
            <h5 className="text-lg font-bold">Ava Lee</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src='../src/assets/ruby.png' className="w-16 -mt-14 size-14 rounded-full object-cover" alt="" />
            <h5 className="text-lg font-bold">Ruby Lane</h5>
            <p className="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src='../src/assets/Max.png'  className="w-16 -mt-14 size-14 rounded-full object-cover" alt="" />
            <h5 className="text-lg font-bold">Max Hart</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="my-16 flex justify-center">
        <a
          href="#" >
      <Button />
        </a>
      </div>
    </section>
  );
};
export default Testimonial;
