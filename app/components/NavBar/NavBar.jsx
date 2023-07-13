
import Image from 'next/image'
import Link from 'next/link';


export default function NavBar() {
  return(
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center">
      <div className="logo">
        {/* <image src=' www.goolge.com ' alt = ' ' height={} width = {} /> */}
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-10 font-bold">
          
          <Link href={"/"}><li>Home</li> </Link>

          <Link href={"/About"}> <li>About</li>  </Link>

          <Link href={"/CorpusData"}> <li>Corpus/Data</li> </Link>

          <Link href={"/QuearyOverview"}>  <li>Query</li>  </Link>

          <Link href={"/Contact"}>  <li>Contact</li>  </Link>

        </ul>
      </div>

        

    </div>
  );
  
  };