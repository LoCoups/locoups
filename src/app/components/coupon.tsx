// import React from "react";
// import Image from "next/image";

// export default function Coupon({coupon}) {
//   return (
//     <div
//       className="border rounded border-black min-w-0 w-1/5 min-h-80 m-1"
//       // className="border border-black min-w-0 width p-4 max-h-20 m-1"

//     >
//       {/* <p>{props.name}</p>
//       <p>{props.deal}</p> */}
//       <div className="flex flex-col items-center gap-4">
//         <div className="border border-black">
//           <img
//             src={coupon.imgUrl}
//             alt="food"
//           ></img>
//         </div>
//         <div className="flex flex-col items-center">
//           <p>{coupon.name}</p>
//           <p>{coupon.deal}</p>
//           <p>{coupon.totalCoupons} more coupons</p>
//         </div>
//       </div>

//     </div>
//   );
// }

import React from "react";
import Image from "next/image";


export default function Coupon({coupon}) {
  return (
    <div className="bg-white">
      {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
        <h2 className="sr-only">Coupons</h2>

        {/* <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"> */}
          
            <div
              key={coupon.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={coupon.imgUrl}
                  alt= 'food'
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={coupon.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {coupon.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{coupon.totalCoupons}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">{coupon.options}</p>
                  <p className="text-base font-medium text-gray-900">{coupon.deal}</p>
                </div>
              </div>
            {/* </div> */}
  
        {/* </div> */}
      </div>
    </div>
  )
}
