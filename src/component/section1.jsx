import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import swipeItem1 from "../assets/section1Pics/c-item1.jpg";
import swipeItem2 from "../assets/section1Pics/c-item2.jpg";
import swipeItem3 from "../assets/section1Pics/c-item3.jpg";
import swipeItem4 from "../assets/section1Pics/c-item4.jpg";
import bannerImg1 from "../assets/section1Pics/s-item1.jpg";
import bannerImg2 from "../assets/section1Pics/s-item2.jpg";
import categoryItem from "../assets/data/section1Data";

export default function CombinedCarousel() {
  const slideItem = [swipeItem1, swipeItem2, swipeItem3, swipeItem4];
  const bannerJpg = [bannerImg1, bannerImg2];
  const [curr, setCurr] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slideItem.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slideItem.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    let intervalId;

    if (isOpen) {
      intervalId = setInterval(() => {
        setCurr((curr) => (curr === slideItem.length - 1 ? 0 : curr + 1));
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isOpen, slideItem.length]);

  return (
    <>
      <div className=" flex flex-row justify-center gap-1 m-10">
        <div
          className="overflow-hidden relative w-[50%] "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slideItem.map((item, index) => (
              <img src={item} key={index} />
            ))}
          </div>
          {isOpen && (
            <div>
              <div className="absolute inset-0 flex items-center justify-between p-0">
                <button
                  onClick={prev}
                  className="p-1 shadow-lg bg-gray-800 bg-opacity-30 h-[70px] w-[35px] hover:bg-opacity-50 "
                >
                  <ChevronLeft className=" text-white" />
                </button>
                <button
                  onClick={next}
                  className="p-1 shadow-lg bg-gray-800 bg-opacity-30 h-[70px] w-[35px] hover:bg-opacity-50"
                >
                  <ChevronRight className=" text-white text-lg" />
                </button>
              </div>
              <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                  {slideItem.map((_, i) => (
                    <div
                      key={i}
                      className={`transition-all w-[10px] h-[10px]   rounded-full
                    ${
                      curr === i
                        ? " bg-[#F53E2D] "
                        : "bg-white bg-opacity-50 border-black border-solid border-[1px] border-opacity-20"
                    }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-1   w-[20rem] h-[15.2rem]">
          {" "}
          {bannerJpg.map((item) => (
            <img src={item} key={item} className=" w-full h-full" />
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center gap-1  ">
        {categoryItem.map((item) => (
          <div
            key={item.itemId}
            className="  w-[100px] h-[90px] flex flex-col gap-2  items-center m-1 cursor-pointer hover:w-[105px] hover:shadow-md ease-in duration-200 "
          >
            <div className=" border-solid border-black border-[1px] border-opacity-20 rounded-lg flex justify-center items-center w-[70%] h-[50%] ">
              <img src={item.img} alt={item.title} className=" p-2 " />
            </div>
            <div className=" flex items-center">
              <p className=" text-center break-words text-sm ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
