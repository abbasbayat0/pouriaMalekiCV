const Main = () => {
  return (
    <div className="h-[45%] bg-[#20202A] overflow-scroll">
      {/* biography */}
      <div className="flex justify-between m-5">
        <div className="flex flex-col gap-3">
          <p className="text-white font-poppins text-sm tracking-wider opacity-90">Residence:</p>
          <p className="text-white font-poppins text-sm tracking-wider opacity-90">City:</p>
          <p className="text-white font-poppins text-sm tracking-wider opacity-90">Age:</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-white font-poppins text-sm font-extralight text-end opacity-50 tracking-wider">Iran</p>
          <p className="text-white font-poppins text-sm font-extralight text-end opacity-50 tracking-wider">Hamedan</p>
          <p className="text-white font-poppins text-sm font-extralight text-end opacity-50 tracking-wider">28</p>
        </div>
      </div>
      <hr className="opacity-20 mx-2" />

      {/* languages */}
      <div className="flex justify-between m-5 h-20"></div>
      <hr className="opacity-20 mx-2" />

      {/* skills */}
      <div className="flex justify-between m-5"></div>

      {/* ticks */}
      <div className="flex justify-between m-5"></div>

      {/* resume download */}
      <div className="flex justify-between m-5"></div>
    </div>
  )
}

export default Main