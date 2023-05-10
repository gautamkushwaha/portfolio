import React from 'react'
import Link from 'next/link'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";
import { BsFillForwardFill } from 'react-icons/bs';
export default function Projects() {
    return (
        <div className='w-[100vw] my-[150px]' id="projects">
            <div className=" w-[100%]  flex-col flex md:flex-row flex-2 items-center justify-center">
                <div className=" w-[90%] md:w-[60%]  grid grid-cols-2 gap-[5%] justify-center items-center">
                    <div className=" w-[100%]  flex flex-col justify-center items-center py-5 m-auto">
                        <h2 className="text-white text-xl  md:text-3xl font-bold">Featured Projects</h2>
                        <p className="text-white "> These are some featured project, which exemplify my expertise and achievements, representing the successful culmination of my efforts and innovative approach.




                        </p>

                    </div>
                    <div className=" w-[100%]   py-5  float-right  m-auto">
                        <div className="m-auto text-center ">
                            <Link className='bg-indigo-500 hover:bg-blue-700 text-black rounded  p-3 my-auto' href="https://vercel.com/dashboard" target="_blank">More on vercel</Link>
                            {/* <button className='bg-[#ff0000] text-black rounded  p-3 mb-[60px]'> Contact</button>  */}

                        </div>

                    </div>
                    <div class="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="spotmies.png" alt="Image" class=" w-[60%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start text-white p-4 opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold ">Spotmies</h1>
                            <p class>Its business Solution Company that works on web and web 3.0</p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-black opacity-0 hover:opacity-100 flex">
                                {/* <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100"> */}
                                {/* <Link href="https://github.com/pdkkg/weather-app.git"  target="_blank" class="text-gray-500 hover:text-black mr-4">
                                <FaGithubSquare  size={30} className="text-white hover:text-black"/>
                                </Link> */}
                                <Link href="https://www.spotmies.com/" target="_blank" class="text-white mr-4 bottom-1">
                                    <BsFillForwardFill size={30} className="text-white hover:text-black" />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-gray-800">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>





                    <div class="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="weat.png" alt="Image" class="w-[60%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold text-white">Weather App</h1>
                            <p>This app fetch the real time weater condition of the given place</p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-black opacity-0 hover:opacity-100 flex">
                                {/* <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100"> */}
                                {/* <Link href="https://github.com/pdkkg/weather-app.git"  target="_blank" class="text-gray-500 hover:text-gray-800 mr-4">
                                <FaGithubSquare  size={30} className="text-white hover:text-black"/>
                                </Link> */}
                                <Link href="https://weather-app-alpha-lyart-23.vercel.app/" target="_blank" class="text-gray-500 hover:text-gray-800 mr-4 bottom-1">
                                    <BsFillForwardFill size={30} className="text-white hover:text-black" />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-gray-800">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="NestNepal.png" alt="Image" class="w-[60%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-black opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold">NestNepal</h1>
                            <p>A web Hosting company based in Nepal that offers a range of services.</p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-black opacity-0 hover:opacity-100 flex">
                                {/* <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100"> */}
                                {/* <Link href="https://github.com/pdkkg/weather-app.git"  target="_blank" class="text-gray-500 hover:text-gray-800 mr-4">
                                <FaGithubSquare  size={30} className="text-white hover:text-black"/>
                                </Link> */}
                                <Link href="https://nestnepal.com/" target="_blank" class="text-gray-500 hover:text-gray-800 mr-4">
                                    <BsFillForwardFill size={30} className="text-white hover:text-black" />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-black">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="calc.png" alt="Image" className="w-[70%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold text-black">Dictionary App</h1>
                            <p class="text-black">You can search for words to get their meaning.</p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-white opacity-0 hover:opacity-100 flex">
                                {/* <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100"> */}
                                <Link href="https://github.com/pdkkg/calculator" target="_blank" class="text-gray-500 hover:text-gray-800 mr-4">
                                    <FaGithubSquare size={30} className="text-white hover:text-black" />
                                </Link>
                                <Link href="https://calculator-umber-seven.vercel.app/" target="_blank" class="text-gray-500 hover:text-gray-800 mr-4">
                                    <BsFillForwardFill size={30} className="text-white hover:text-black" />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-gray-800">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="  bg-slate-800 hover:bg-slate-900 col-span-2 w-[100%] shadow-sky-50 flex-col flex md:flex-row justify-around  p-2 md:p-5 mb-[100px]">
                        <div className="md:w-[50%] w-[100%] flex-col justify-center ">
                            <h1 className="text-white text-4xl font-serif">Lets Work Together on Your Next Project</h1>
                            <p className="text-white ">
                                I'm eager to partner with you on your next project. Our combined skills and collaboration will yield exceptional results. Let's work together and make it a remarkable success.</p>
                        </div >
                        <div className=" my-5">
                            <Link className=' text-black bg-indigo-500 hover:bg-blue-700 rounded  p-3 my-auto' href="#contact">Contact</Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
}
