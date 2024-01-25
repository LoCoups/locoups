import React from "react";

export default function Coupon(props: any) {
  return (
    <div className="min-w-0 p-4">
      <p>{props.name}</p>
      <p>{props.deal}</p>
    </div>
  );
}