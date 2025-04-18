import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/commen/header';
import './Service.css'
import image2 from '../assets/Frame 2106260786.png'
import image1 from '../assets/Rectangle 1321321749.png'
import image3 from '../assets/code.jpg'
import Footer from '../components/commen/footer';
import SearchBox from '../components/commen/SearchBox';
const ServicePage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const services = [
    'Artificial Intelligence & Advanced Data Solutions',
    'Custom Software Development, Cloud & DevOps Engineering',
    'Product Innovation, Design & Digital Experiences',
    'Branding, Marketing & Content Strategy',
    'Strategic Consulting & Digital Transformation',
  ];
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden ">
        {/* Rotating blurred circles */}
        <div className="absolute inset-0 flex justify-between items-start px-12 pt-16 z-0">
          {/* Left Blur Circle (Clockwise) */}
          <motion.div
            className="w-80 h-80 rounded-full bg-blue-500 blur-3xl opacity-30"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ transformOrigin: "center" }}
          />

          {/* Right Blur Circle (Counter-clockwise) */}
          <motion.div
            className="w-80 h-80 rounded-full bg-blue-400 blur-3xl opacity-30"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center md:pt-[200px] lg:pt-[200px] pt-[120px] text-center px-4">
          <h1 className="text-4xl md:text-6xl font-[Montserrat] mb-4">
            Explore our services
          </h1>

          {/* Search Box with Arrow Inside */}
          <SearchBox placeholder="Search Blogs..." />
        </div>
        {/* Only for phone size scrolling effect */}
        <div className="scroll-wrapper">
          <div className="scroll-content">
            <div className="scroll-track">
              <div className="scroll-item">
                Artificial Intelligence & Advanced Data Solutions
              </div>
              <div className="scroll-item">
                Custom Software Development, Cloud & DevOps Engineering
              </div>
              <div className="scroll-item">
                Product Innovation, Design & Digital Experiences
              </div>
              <div className="scroll-item">
                Branding, Marketing & Content Strategy
              </div>
              <div className="scroll-item">
                Strategic Consulting & Digital Transformation
              </div>

              {/* Duplicate items for continuous scroll */}
              <div className="scroll-item">
                Artificial Intelligence & Advanced Data Solutions
              </div>
              <div className="scroll-item">
                Custom Software Development, Cloud & DevOps Engineering
              </div>
              <div className="scroll-item">
                Product Innovation, Design & Digital Experiences
              </div>
              <div className="scroll-item">
                Branding, Marketing & Content Strategy
              </div>
              <div className="scroll-item">
                Strategic Consulting & Digital Transformation
              </div>
            </div>
          </div>
        </div>
        {/* For md and above */}
          <div className="responsive-container">
      {/* First Row */}
      <div className="service-flex flex lg:flex-row justify-center gap-4 mb-4 flex-wrap">
        {services.slice(0, 2).map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`cursor-pointer rounded-[29px] px-6 py-3 border-2 text-[13px] sm:text-base
              ${selectedIndex === index
                ? 'bg-[#e9dbc1] text-black border-[#e9dbc1]'
                : 'bg-transparent text-white border-gray-300'}
            `}
          >
            {service}
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="service-flex flex flex-row justify-center gap-4 flex-wrap">
        {services.slice(2).map((service, index) => (
          <div
            key={index + 2}
            onClick={() => setSelectedIndex(index + 2)}
            className={`cursor-pointer rounded-[29px] px-6 py-3 border-2 text-[13px] sm:text-base
              ${selectedIndex === index + 2
                ? 'bg-[#e9dbc1] text-black border-[#e9dbc1]'
                : 'bg-transparent text-white border-gray-300'}
            `}
          >
            {service}
          </div>
        ))}
      </div>
    </div>

        <div className="lg:mt-[122px] mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 mb-14">
          {/* Box 1 */}
          <div
              className="h-[417px] w-full rounded-[9px] bg-cover bg-center p-6 custom-box"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="custom-text-container">
                <h3 className="text-2xl font-serif text-white">
                  Innovation & Product Ideation
                </h3>
                <p className="text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>

          {/* Box 2 */}
          <div
            className="h-[417px] w-full rounded-[9px] bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <h3 className="text-2xl font-bold text-white w-[400px]"></h3>
            <p className="text-white mt-4">
           
            </p>
          </div>

          {/* Box 3 - This will span full width on mobile and full width below the first two on desktop */}
          <div
            className="h-[417px] w-full lg:col-span-2 rounded-[9px] bg-cover bg-center p-6 custom-box"
            style={{
              backgroundImage: `linear-gradient(
                to right, 
                rgba(0, 0, 0, 0.95) 0%,   /* near black at start */
                rgba(0, 0, 0, 0.85) 40%,  /* very dark */
                rgba(0, 0, 0, 0.4) 50%,   /* fading out */
                rgba(0, 0, 0, 0) 100%     /* fully transparent at end */
              ), url(${image3})`,
            }}
          >
            <div className="custom-text-container">
            <h3 className="text-2xl font-serif text-white">
              Digital Product Development
            </h3>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
};

export default ServicePage;