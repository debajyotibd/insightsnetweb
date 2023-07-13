"use client";

import LoginButton from '../components/LoginButton/LoginButton';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';
import ProfileIcon from '../components/ProfileIcon/ProfileIcon';


export default function DataExploration() {

  // const {data: session, status } = useSession();

  // if (status === "authenticated"){
    return (
      <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              
              
              
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-40 overflow-hidden">
                  <Image
                    alt="ArangoDB"
                    className="object-cover object-center h-auto w-auto"
                    src="/gv.png"
                    width={500}
                    height={500}
                  />
                </div>
                <br></br>
                <Link href={"https://linglit200.linglit.tu-darmstadt.de:16000/"}>
                  {" "}
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    {" "}
                    Use GraphViewer{" "}
                  </button>{" "}
                </Link>
              </div>
              
              
  
    
              
              
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-40 overflow-hidden">
                  <Image
                    alt="IMS CWB"
                    className="object-cover object-center h-auto w-auto"
                    src="/ce.png"
                    width={500}
                    height={500}
                  />
                </div>
                <br></br>
                <Link href={"https://linglit200.linglit.tu-darmstadt.de:8000/"}>
                  {" "}
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    {" "}
                    Use IMS CWB{" "}
                  </button>{" "}
                </Link>
              </div>
              
  
  
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-40 overflow-hidden">
                  <Image
                    alt="InsightNetCCC"
                    className="object-cover object-center h-auto w-auto"
                    src="/in_ccc.png"
                    width={500}
                    height={500}
                  />
                </div>
                <br></br>
                <Link href={"https://linglit200.linglit.tu-darmstadt.de:3000/"}>
                  {" "}
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    {" "}
                    Use InsightsNet_CCC{" "}
                  </button>{" "}
                </Link>
              </div>
  
  
  
  
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-40 overflow-hidden">
                  <Image
                    alt="Jupyter Notebook"
                    className="object-cover object-center h-auto w-auto"
                    src="/lde.png"
                    width={500}
                    height={500}
                  />
                </div>
                <br></br>
                <Link href={"https://linglit200.linglit.tu-darmstadt.de:8001/"}>
                  {" "}
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    {" "}
                    Use Jupyter Notebook{" "}
                  </button>{" "}
                </Link>
              </div>
            
            
            </div>
          </div>
        </section>
      </div>
    );

  }


  
//   return (

// <div className='text-center mx-4 space-y-2 mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-4xl dark:text-white">Regain <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500'> 
 
//  <h1>
// <ProfileIcon/> via GitHub
//  </h1>
//  </div>



// )



// }