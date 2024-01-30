// import React from 'react'
import Searchbar from "./searchbar";

export default function Navbar() {
  return (
    <nav
      className='bg-gray-800 p-4 flex justify-between items-center'
      style={{ height: "5em" }}
    >
      <div>
      <h2 className="text-white">LoCoups</h2>
      </div>
      <Searchbar />
      <div className='flex text-white'>
        <p className="mr-4">login</p> 
        <p>sign up</p>
      </div>
    </nav>
  );
}