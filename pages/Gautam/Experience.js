import React from "react";

export default function Experience() {
  return (
    <div className="w-[100vw] bg-black mx-auto my-[50px]">
      <div className=" w-[100%] m-auto gap-8 flex-col flex md:flex-row flex-5 items-center justify-center ">
        {/* cards start here */}

        <div className="w-[70%] md:w-1/5 mb-[20px] md:mx-[10px] text-left">
          <div>
            <h2 className="text-white font-bold text-left text-3xl md:text-5xl ">
              2+ Year of Experience
            </h2>
          </div>

        </div>
        <div className=" w-[90%] md:w-2/5  mb-[20px] mx-auto md:mx-[10px]  mr-[10px] grid grid-cols-2 gap-8">
          <div className=" w-[95%] bg-gray-800 hover:bg-gray-900  flex flex-col justify-center items-center py-5 m-auto">
           <h2 className="text-white text-5xl font-bold">5+</h2>
           <p className="text-white font-bold "> clients</p>

          </div>
          <div className=" w-[95%] bg-gray-800 hover:bg-gray-900  flex flex-col justify-center items-center  py-5 m-auto">
           <h2 className="text-white text-5xl font-bold">5+</h2>
           <p className="text-white  font-bold"> projects</p>

          </div>
          <div className=" w-[95%] bg-gray-800 hover:bg-gray-900 s flex flex-col justify-center items-center  py-5 m-auto">
           <h2 className="text-white text-5xl font-bold">3+</h2>
           <p className="text-white font-bold">Working on projects </p>

          </div>

          <div className=" w-[95%] bg-gray-800 hover:bg-gray-900  flex flex-col justify-center items-center  py-5 m-auto">
           <h2 className="text-white text-5xl font-bold">10+</h2>
           <p className="text-white font-bold">Patners</p>

          </div>
        </div>
      </div>
    </div>
  );
}