import React, { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5';

export default function ModalCart({ model, carts, setCarts }) {
    const [isSubscribed, setIsSubscribed] = useState(false)
    const handleSubscribe = () => {
        setIsSubscribed(true)
        const isFound = carts.find((item) => item.id === model.id);

        if (isFound) {
            // toast.error("Item already in cart!");
            return;
        }
        setCarts([...carts, model])
    }
    return (
        <div> <div className="card bg-base-100 shadow-sm">
            <figure>
                <div className=' w-full flex justify-between items-start px-3 mt-2'>
                    <img className=' object-contain '
                        src={model.icon}
                        alt={model.name} /> <p>{model.tagType === "Best Seller" && <span className="bg-amber-200  text-amber-600 px-2  justify-items-center py-1 rounded-full">Best Seller</span> || model.tagType ==="Popular" && <span className="bg-blue-200  text-blue-600 px-2  justify-items-center py-1 rounded-full">Popular</span> || model.tagType ==="New" && <span className="bg-green-200  text-green-600 px-2  justify-items-center py-1 rounded-full">New</span> }</p> </div>
            </figure>
            <div className="card-body">
                <h2 className='text-xl font-bold'>
                    {model.name}
                </h2>
                <p>{model.description}</p>
                <h2 className='text-xl font-bold'>${model.price}/{model.period}</h2>
                <p>{model.features.map((feature) => <span key={feature} className="flex flex-col items-start gap-1">
                    <span className='flex justify-center items-center gap-1'><IoCheckmark />  {feature}</span>
                </span>)}</p>
                <div className="card-actions justify-end">
                    <button
                        className="btn w-full rounded-full bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white  mt-5"
                        onClick={handleSubscribe}
                    >
                        {isSubscribed ? 'In Cart' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div></div>
    )
}
