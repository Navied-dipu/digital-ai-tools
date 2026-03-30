import React from 'react'

export default function Cart({carts, setCarts}) {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([]);
        // toast.success("Payment successful! Thank you for your purchase.");
    }
    const handleDelete = (item) => {
        const filteredArray = carts.filter((c) => c.id !== item.id);
        setCarts(filteredArray);
        // toast.success("Item deleted!");
    };
  return (
    <div className='py-10 space-y-5 max-w-5xl mx-auto'>
      <h2 className="text-4xl font-bold text-center">Your Carts</h2>

      <div className="space-y-3 flex flex-col items-center">
        {carts.length === 0 ? (
          <p className="text-center text-2xl p-5">Cart is empty</p>
        ) : (
          carts.map((cart, index) => (
            <div
              key={index}
              className="bg-zinc-200 max-w-2xl w-full px-5 py-2 rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center space-x-3">
                <img
                  className="w-10 h-20 object-contain"
                  src={cart.icon}
                  alt={cart.title}
                />
                <p className="text-xl">{cart.name}</p>
              </div>

              <p className="font-bold text-xl">
                ${cart.price.toFixed(2)}/month
              </p>
              <button
                onClick={() => handleDelete(cart)}
                className=" btn rounded-full btn-error"
              >
                remove
              </button>
            </div>

          ))
        )}

      </div>

      <div className="max-w-2xl w-full mx-auto bg-black text-white px-5 py-2 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Total</h1>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <button onClick={handlePayment} className="max-w-2xl flex justify-center items-center w-full mx-auto bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-lg">
        Proceed to Checkout
      </button>
    </div>
  )
}
