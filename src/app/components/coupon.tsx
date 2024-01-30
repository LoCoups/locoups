import React from "react";
import Image from "next/image";

export default function Coupon({coupon}) {
  return (
    <div
      className="border rounded border-black min-w-0 w-1/5 min-h-80 m-1"
      // className="border border-black min-w-0 width p-4 max-h-20 m-1"

    >
      {/* <p>{props.name}</p>
      <p>{props.deal}</p> */}
      <div className="flex flex-col items-center gap-4">
        <div className="border border-black">
          <img
            src={coupon.imgUrl}
            alt="food"
          ></img>
        </div>
        <div className="flex flex-col items-center">
          <p>{coupon.name}</p>
          <p>{coupon.deal}</p>
          <p>{coupon.totalCoupons} more coupons</p>
        </div>
      </div>

    </div>
  );
}
