import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";

const LeftSide = () => {
  const [sort, changeSort] = useState<boolean>(false);

  useEffect(() => {
    if(window.innerWidth >= 640) changeSort(true);
  }, []);

  return (
    <div className="w-full bg-[#24242F] flex flex-col">
      <Header />
      {sort ? (
        <>
          <Main />
          <Footer />
        </>
      ) : (
        <>
          <Footer />
          <Main />
        </>
      )}
    </div>
  );
};

export default LeftSide;
