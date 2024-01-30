import Image from 'next/image'
import Coupon from './components/coupon'
import couponData from './coupons.json'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='flex flex-wrap justify-between w-full p-12'>
        {couponData.map((coupon, index) => {
          return (
            <Coupon
              key={index}
              coupon={coupon}
            />
          )
        })}
      </div>
      {/* <img src='https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:product-header-desktop?wid=830&hei=456&dpr=off'></img> */}
    </main>
  )
}
