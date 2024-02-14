import Image from 'next/image'
import Coupon from './components/coupon'
import couponData from './coupons.json'

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"'>
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
