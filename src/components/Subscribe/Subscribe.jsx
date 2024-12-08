import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { useTranslation } from 'react-i18next';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const { i18n, t } = useTranslation();
  {/*{t('home')}     t('home') */}
  return (
    <div
      id="contact"
      data-aos="zoom-in"
      className="mb-10 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
          {t('subscribe')}
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder={t('email')}
            className="w-full p-2 bg-white dark:bg-gray-700 text-black dark:text-white"// Change text color to black
          />
          <textarea
            data-aos="fade-up"
            placeholder={t('subscribeDes')}
            className="w-full p-2 bg-white dark:bg-gray-700 text-black dark:text-white h-24 resize-none" // Added height and no resize
          />
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md" data-aos="fade-up">
          {t('us')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;