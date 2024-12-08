import React from "react";
import BannerImg from "../../assets/mecanique/mecanique3.jfif";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { i18n, t } = useTranslation();
  {/*{t('home')}     t('home') */}
  return (
    <div id="about" className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-3xl"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-primary">
            {t('aboutInf')}
            </h1>
            <p
              data-aos="fade-up"
              className="sm:text-2xl text-xl text-gray-500 tracking-wide leading-5 font-semibold"
            >{t('aboutDes')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
