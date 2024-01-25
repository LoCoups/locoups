import Image from 'next/image'
import Coupon from './components/coupon'

const coupons = [
  {
    name: "McDonalds",
    deal: "$5 off $20"
  },
  {
    name: "Taco Bell",
    deal: "$4 off $20"
  },
  {
    name: "Chick-Fil-A",
    deal: "$3 off $20"
  },
  {
    name: "Raising Canes",
    deal: "$6 off $20"
  },
  {
    name: "Raising Canes",
    deal: "$6 off $20"
  },
  {
    name: "Raising Canes",
    deal: "$6 off $20"
  },
  {
    name: "Raising Canes",
    deal: "$6 off $20"
  },
]

export default function Home() {
  return (
    <main className="flex w-full flex-wrap min-h-screen overflow-y-auto p-12">
      {coupons.map((coupon, index) => {
        return (
          <Coupon
            key={index}
            name={coupon.name}
            deal={coupon.deal}
          />
        )
      })}
    </main>
  )
}
