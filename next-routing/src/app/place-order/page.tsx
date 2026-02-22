"use client"

import { useRouter } from "next/navigation";

const PlaceOrder = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('Order has been placed!');
    router.push('/congratulations');
  }
  return (
   <div className='border border-gray-300 p-3 rounded-md max-w-1/3 mx-auto mt-6'>
    <div className="border border-gray-200">Product Card</div>
    <button onClick={handleClick} className='border border-slate-200 p-2 mt-2'>Place Order</button>
   </div>
  )
}

export default PlaceOrder