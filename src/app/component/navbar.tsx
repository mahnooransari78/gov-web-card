import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-around h-16 sticky top-0 w-full bg-[#004E83] z-30 items-center">
        <Image 
         className="w-[100px] mt-14 shadow-gray-500"
         src="/logo.9ff76f62.png" 
         width={200} 
         height={200}
         alt="logo" 
         />
        <h1 className="text-[25px] font-extrabold text-[#B9D8F3]">Tuition Free Education Program on latest Technologies</h1>
        <ul className="flex space-x-5 text-white">
            <li><Link href="#"/>Home</li>
            <li><Link href="#"/>Apply</li>
            <li><Link href="#"/>result</li>
            <li><Link href="#"/>Job</li>
            <li><Link href="#"/>Courses</li>
        </ul>

           
        </div>
    );
}