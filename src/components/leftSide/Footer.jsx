import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="h-[10%] bg-transparent flex justify-around items-center">
      <motion.i
        whileHover={{scale: 1.5}}
        className="fas fa-at text-white opacity-80 text-xl"
      ></motion.i>
      <motion.i
        whileHover={{scale: 1.5, color: "#4479C5"}}
        className="fab fa-linkedin text-white opacity-80 text-xl"
      ></motion.i>
      <motion.i
        whileHover={{scale: 1.5, color: "#682F88"}}
        className="fab fa-github text-white opacity-80 text-xl"
      ></motion.i>
    </div>
  );
};

export default Footer;
