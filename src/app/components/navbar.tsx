// import React from 'react'
import Searchbar from "./searchbar";

export default function Navbar() {
  return (
    <nav className='bg-gray-800 p-4 flex justify-between '>
      <div>
        <h2>LoCoups</h2>
      </div>
      <Searchbar/> 
      <div className='flex '>
        <h4>login</h4>
        <h4>signup</h4>
      </div>
    </nav>
  );
}
