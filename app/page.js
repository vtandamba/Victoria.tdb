'use client';
import Image from "next/image";
import Header from "./components/Header";
import Body from "./components/Body";

 

export default function Home() {
  return (
   <div className="global-container">
  
{/* main header */}
    <Header>

    </Header>
{/* main body */}
<Body/>
{/* footer */}
   </div>
  );
}
