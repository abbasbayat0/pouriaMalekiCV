import photo from "./../../assets/images/image.png"

const Header = () => {
  return (
    <div className="h-[45%] bg-transparent flex flex-col justify-center items-center">
      {/* image section */}
      <div className="relative w-24 h-24 rounded-full">
        <img src={photo} alt="Pouria Maleki" />

        {/* online dot */}
        <div className="w-5 h-5 rounded-full bg-[#FFC107] absolute right-0 bottom-0 animate-pulse"></div>
      </div>

      {/* title */}
      <div className="mt-5">
        <strong className="text-white font-poppins font-semibold tracking-wider">Pouria Maleki</strong>
      </div>

      {/* description */}
      <div className="mt-2">
        <p className="text-gray-400 text-center opacity-90 text-xs tracking-wider font-poppins">Electrical Engineer</p>
        <p className="text-gray-400 text-center opacity-90 text-xs tracking-wider font-poppins">Control Sys. Student</p>
      </div>
    </div>
  )
}

export default Header