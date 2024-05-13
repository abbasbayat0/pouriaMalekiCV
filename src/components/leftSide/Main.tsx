import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Main = () => {
  const [englishValue, changeEnglishValue] = useState(0);
  const [persianValue, changePersianValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (persianValue < 100) changePersianValue(persianValue + 1);
    }, 10);
  }, [persianValue]);
  useEffect(() => {
    setTimeout(() => {
      if (englishValue < 80) changeEnglishValue(englishValue + 1);
    }, 10);
  }, [englishValue]);

  return (
    <div className="h-[45%] bg-[#20202A] overflow-scroll">
      {/* biography */}
      <div className="flex justify-between m-5">
        <div className="flex flex-col gap-3">
          <p className="text-white font-poppins text-sm tracking-wider opacity-90">
            Residence:
          </p>
          <p className="text-white font-poppins text-sm tracking-wider opacity-90">
            City:
          </p>
          <p className="text-white font-poppins text-sm tracking-wider opacity-90">
            Age:
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-white font-poppins text-sm font-extralight text-end opacity-50 tracking-wider">
            Iran
          </p>
          <p className="text-white font-poppins text-sm font-extralight text-end opacity-50 tracking-wider">
            Hamedan
          </p>
          <p className="text-white font-poppins text-sm font-extralight text-end opacity-50 tracking-wider">
            28
          </p>
        </div>
      </div>
      <hr className="opacity-20 mx-2" />

      {/* languages */}
      <div className="flex justify-around m-5 h-20">
        <div className="flex flex-col relative">
          <CircularProgressbar
            className="absolute w-16 -mt-2 -ml-1"
            value={persianValue}
            maxValue={100}
            text={`${persianValue}%`}
            styles={buildStyles({
              pathColor: "#FFC107",
              trailColor: "#191923",
              textColor: "#CACACE",
            })}
          />
          <p className="text-white mt-16  opacity-70">Persian</p>
        </div>
        <div className="flex flex-col relative">
          <CircularProgressbar
            className="absolute w-16 -mt-2 -ml-1"
            value={englishValue}
            maxValue={100}
            text={`${englishValue}%`}
            styles={buildStyles({
              pathColor: "#FFC107",
              trailColor: "#191923",
              textColor: "#CACACE",
            })}
          />
          <p className="text-white mt-16  opacity-70">English</p>
        </div>
      </div>
      <hr className="opacity-20 mx-2" />

      {/* skills */}
      <div className="flex justify-between m-5"></div>

      {/* ticks */}
      <div className="flex justify-between m-5"></div>

      {/* resume download */}
      <div className="flex justify-between m-5"></div>
    </div>
  );
};

export default Main;
