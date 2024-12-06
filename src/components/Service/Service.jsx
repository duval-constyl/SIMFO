import React from "react";
import BannerImg from "../../assets/mecanique/mecanique3.jfif";
import { FaStar } from "react-icons/fa";


const Service = () => {
  return (
    <div className="mt-5 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-5 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Informations on our services
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
           Our Services
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Our services are offered and provided by our group of engineers and technicians in various domains.
          </p>
        </div>
        {/* Body section */}
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaStar className="text-4xl h-20 w-20 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400" />
                  <div>
                    <p className="font-bold">Troubleshooting and Repair of Heavy Equipment</p>
                    <span>This service involves the troubleshooting and repair of heavy machinery and equipment.</span>
                  </div>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaStar className="text-4xl h-20 w-20 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <div>
                    <p className="font-bold">Metallic Construction</p>
                    <span>This service focuses on the construction of metal structures using materials like steel and aluminum.</span>
                  </div> 
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaStar className="text-4xl h-20 w-20 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <div>
                    <p className="font-bold">General Mechanics</p>
                    <span>General mechanics services encompass a wide range of mechanical repairs and maintenance tasks.</span>
                  </div>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaStar className="text-4xl h-20 w-20 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <div>
                    <p className="font-bold">Industrial Mechanics</p>
                    <span>Industrial mechanics focus on the maintenance and repair of machinery used in manufacturing processes.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* image section */}
            <div className="grid grid-cols-2 gap-4 p-4">
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt=""
                  className="max-w-[200px] h-[200px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-3xl"
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt=""
                  className="max-w-[200px] h-[200px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-3xl"
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt=""
                  className="max-w-[200px] h-[200px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-3xl"
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt=""
                  className="max-w-[200px] h-[200px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-3xl"
                />
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Service;
