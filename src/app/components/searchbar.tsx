// "use client";

// import React, { useState } from "react";
// import couponData from '../coupons.json'

// export default function Searchbar() {
//   const [searchInput, setSearchInput] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };

//   let filteredData = couponData;

//   if (searchInput.length > 0) {
//     filteredData = couponData.filter((item) => {
//       console.log("Finding", searchInput);
//       return Object.values(item)
//         .join("")
//         .toLowerCase()
//         .includes(searchInput.toLowerCase());
//     });
//   }

//   return (
//     <form>
//       <div className='flex' style={{ width: "50em" }}>
//         <div className='flex-row w-full relative'>
//           <div className='relative w-full'>
//             <input
//               type='search'
//               id={"location-search"}
//               className='block p-4 w-full z-20 h-14 text-sm text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
//               placeholder='Search for city or address'
//               onChange={handleChange}
//               value={searchInput}
//             ></input>
//           </div>
//           {searchInput && (
//             <div className='items-center py-2.5 px-4 z-20 w-full text-sm text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'>
//               <ul>
//                 {filteredData.map((item, index) => (
//                   <li key={index}>{item.name}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//         <div className='relative w-full'>
//           <input
//             type='search'
//             id={"location-search"}
//             className='block p-4 z-20 w-full h-14 text-sm text-gray-900 bg-gray-50  rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
//             placeholder='Address, Neighborhood, City, State, or Zip'
//             required
//           />
//           <button
//             type='submit'
//             className='absolute top-0 end-0 p-2.5 z-20 h-14 w-18 flex items-center justify-center text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//           >
//             <svg
//               className='w-8 h-8'
//               aria-hidden='true'
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 20 20'
//             >
//               <path
//                 stroke='currentColor'
//                 stroke-linecap='round'
//                 stroke-linejoin='round'
//                 stroke-width='2'
//                 d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
//               />
//             </svg>
//             <span className='sr-only'>Search</span>
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }