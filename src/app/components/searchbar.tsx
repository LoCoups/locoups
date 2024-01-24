"use client"

import React, { useState } from 'react'

export default function Searchbar() {
  const [searchInput, setSearchInput] = useState("");

  const couponData = [
    { company: "McDonalds", coupon: "1 McChicken"},
  ]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  let filteredData = couponData;

  if (searchInput.length > 0) {
    filteredData = couponData.filter((item) => {
      console.log('Finding', searchInput);
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  }


  return (
    <div className='text-black'>
      <input
        type="text"
        placeholder="Enter city or zipcode"
        onChange={handleChange}
        value= {searchInput}
      />

      <table>
              <tbody>
                <tr>
                  <th>Company</th>
                  <th>Coupon</th>
                </tr>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.company}</td>
                    <td>{item.coupon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div> 

  )

}