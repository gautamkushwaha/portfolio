
import Link from 'next/link';
import React from "react";


export default function Navbar() {
  return (
    <nav>
    <div className="w-[100vw] fixed top-0 bg-black z-50">
      <div className="  w-[100%] flex flex-row justify-around p-2 ">
        <div className="items-center ">
          <img className="w-10 m-1" src="/ironMan.jpeg"  />
        </div>
        <div className="mx-100 ">
          <ul className="flex text-white">
            <Link className='mx-3' href="/"><div>Home</div></Link>
            <Link className='mx-3' href="#projects"><div>Project</div></Link>
            <Link className='mx-3' href="#about"><div>About</div></Link>
            <Link className='mx-3' href="#technology"><div>Skills</div></Link>
            <Link className='mx-3' href="#contact"><div>Contact</div></Link>
            {/* <Lin href="/"> <h className="text-blue-500 hover:text-blue-700">Go back home</h></Lin> */}
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
}
