import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsBox from "../components/NewsBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl  pt-10 border-t border-t-gray-300">
        <Title text1={"CONTACT"} tex2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full max-w-[488px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-700">Our Store</p>
          <p className="text-gray-500">
            129847 Bmw-Headquarters <br /> Olive 330, Dourtomund , Germany
          </p>
          <p className="text-gray-500">
            Tel: (252) 770 722 363 <br />
            Email: mobarre001@gail.com
          </p>
          <p className="font-semibold text-xl text-gray-500">
            Careers At Forever
          </p>
          <p className="text-gray-500">
            Learn More Bout Our Teams And Job Openings.
          </p>
          <button className=" rounded-[8px] py-2 cursor-pointer border border-black px-8 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsBox />
    </div>
  );
};

export default Contact;
