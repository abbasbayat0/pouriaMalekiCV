import LeftSide from "./components/leftSide/LeftSide";
import Main from "./components/Main";
import RightSide from "./components/RightSide";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#191923] flex justify-center items-center">
      <div className="w-[95%] h-[90%] max-w-[1536px] bg-[#23232E] flex">
        <LeftSide />
        <Main />
        <RightSide />
      </div>
    </div>
  );
};

export default App;
