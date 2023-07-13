
import Image from 'next/image'
import Link from 'next/link';
import ProfileIcon from '../ProfileIcon/ProfileIcon';


export default function Header() {
    return (
        <div>
           <header className="text-gray-600 body-font bg-blue-500 bg-opacity-25">
       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
         <a href="/" className="flex items-center" >
             <Image src="/in.png" width={80} height={200} className="h-15 mr-5" alt="InsightsNet_Logo" />
             <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ">InsightsNet_Web</span>
         </a>
     
     
         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
           <Link href={"/About"} className="mr-8 hover:text-gray-900 text-2xl">  <> About </> </Link>
           <Link href={"/CorpusData"} className="mr-8 hover:text-gray-900 text-2xl"> <> Corpus/Data </>  </Link>
           <Link href={"/QueryOverview"} className="mr-8 hover:text-gray-900 text-2xl">  <> Query Overview </> </Link>
           <Link className="mr-8 hover:text-gray-900 text-2xl" href={"/DataExploration"}>Data Exploration</Link>
           <Link href={"/Contact"} className="mr-8 hover:text-gray-900 text-2xl">  <> Contact</> </Link>

           {/* <ProfileIcon/> */}
         </nav>
         

       
       
       
       </div>
       </header>
     </div> 
       )
}
