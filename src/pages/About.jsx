import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsBox from "../components/NewsBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-t-gray-300">
        <Title text1={"ABOUT"} tex2={"US"} />
      </div>

      <div className="my-10 flex flex-col sm:flex-row gap-16 ">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum
            quas doloribus hic cumque odio necessitatibus commodi et nemo iure
            deleniti officiis quam laborum aliquam, omnis reiciendis ipsa
            dolorem tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eligendi optio nulla odit illo voluptatem deleniti a neque
            praesentium aliquid labore aut, quia tenetur.
          </p>
          <b className="text-gray-900 ">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            accusantium deserunt ullam explicabo sed. Deserunt eaque voluptate
            error aut mollitia accusantium labore assumenda.
          </p>
        </div>
        
      </div>
      <div className="text-2xl py-4">
          <Title text1={'WHY  YOU'} tex2={'CHOOSE US'} />
        </div>
        <div className="flex flex-col sm:flex-row text-sm mb-20 ">
          <div className="border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="">Quality Assurence:</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum temporibus distinctio ut iure laboriosam eligendi illo necessitatibus vero.</p>


          </div>
                  <div className="border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="">Conveiniece:</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum temporibus distinctio ut iure laboriosam eligendi illo necessitatibus vero.</p>
            

          </div>
                  <div className="border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b className="">Exceptiobal customer Service:</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum temporibus distinctio ut iure laboriosam eligendi illo necessitatibus vero.</p>
            

          </div>
        
        </div>
        <NewsBox />
        
    </div>
  );
};

export default About;
