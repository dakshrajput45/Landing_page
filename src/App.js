import Navbar from "./Component/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import star8 from "./Images/Star 8.png";
import flayerFirst from "./Images/Group 35924.png";
import phoneImg1 from './Images/iPhone-13-Pro-Front.png';
import phoneImg2 from './Images/iPhone-13-Pro-Front (1).png';
import phoneImg3 from './Images/Frame 1.png';
import effectdouble from './Images/Group 35930 (2).png'
import effect from './Images/Group 35899.png'
import effectText from './Images/Group 1000002356.png';
import secondFlayer from './Images/Group 35933 (1).png'
import star3 from "./Images/Star 3.png"
import star5 from "./Images/star-05.png"
import cube1 from './Images/cube-02.png'
import cube2 from './Images/cube-04.png'
import sideEffect from './Images/Group 35897 (2).png'

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="px-[50px] pt-[20px] w-full">
        <Navbar />
      </div>
      <div className="relative w-full px-[75px] gap-[50px]"> {/* Added relative positioning here */}
        <div className="flex flex-col custom:flex-row w-full gap-[50px] ">
          <img src={star3} alt="img" className="w-[50px] h-[50px]" />
          <div className="relative flex flex-col w-1/2 space-y-4 mt-[40px]">
            <img src={effectText} alt="img" className="absolute w-[440px]" style={{ transform: 'translateX(20%) translateY(-35%)' }} />
            <p className="relative text-[64px] font-bold text-black leading-[58px]">Make The Best Financial Decisions</p>
            <p className="text-[18px] text-black leading-[28px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-4 py-2 flex items-center rounded-md">
                Get Started <FaArrowRightLong className="ml-2" />
              </button>
              <button className=" text-black px-4 py-2 flex items-center">
                <FaPlay className="border text-black border-black rounded-full p-[5px] w-[30px] h-[30px] mr-[8px]" /> Watch Video
              </button>
            </div>
            <div className="relative h-100 w-[520px]">
              <img src={flayerFirst} alt="img" className="h-full w-full" />
              <img src={star8} alt="img" className="absolute top-10 left-10 h-15 w-15" />
            </div>
          </div>
          <div className="relative flex self-center">
            <img src={effect} alt="img" style={{ transform: 'translateX(-8%) translateY(4%)' }} />
            <img src={phoneImg3} alt="img" className="absolute inset-0 object-cover" />
            <img src={phoneImg2} alt="img" className="absolute inset-0 object-cover" style={{ transform: 'translateX(-1%) translateY(8%)' }} />
            <img src={phoneImg1} alt="img" className="absolute inset-0 object-cover" style={{ transform: 'translateX(-20%) translateY(-2%)' }} />
          </div>
        </div>
        <div className="relative w-full flex flex-row mt-[20px]"> {/* Adjusted margin to overlap */}
          <div className="relative w-full h-full">
            <img src={effectdouble} alt="img" />
            <img src={star8} alt="img" className="absolute inset-0 object-cover" />
            <img src={secondFlayer} alt="img" className="absolute inset-0 object-cover" />
          </div>
          <div className="flex flex-row relative w-full">
          <div className="absolute inset-0 object-cover flex flex-col mt-[30px] w-full ml-[150px]">
            <p className="text-[22px] font-medium leading-[28px] text-[#FF5555] tracking-[4px]">Features</p>
            <p className="text-[48px] leading-[48px] font-bold mb-[40px]">Ultra Premium</p>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[5px]">
                  <img src={star5} alt="img" />
                  <p className="text-[18px] font-medium leading-[18px]">Budgeting Intervals</p>
                </div>
                <p className="text-[18px] text-black leading-[28px] z-10">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[5px]">
                  <img src={cube1} alt="img" />
                  <p className="text-[18px] font-medium leading-[18px]">Budgeting Intervals</p>
                </div>
                <p className="text-[18px] text-black leading-[28px] z-10">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[5px]">
                  <img src={cube2} alt="img" />
                  <p className="text-[18px] font-medium leading-[18px]">Budgeting Intervals</p>
                </div>
                <p className="text-[18px] text-black leading-[28px]">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px]">
            <img src={sideEffect} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
