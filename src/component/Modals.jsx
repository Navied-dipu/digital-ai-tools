import React, { use } from 'react'
import ModalCart from './ModalCart'

export default function Modals({modelPromise, carts, setCarts}) {
    const models=use(modelPromise)
    // console.log(models)
  return (
    <div className='max-w-5xl mx-auto my-20' >
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10  justify-items-center ">
                {
                    models.map((model) => (
                        <ModalCart key={model.id} model={model} carts={carts} setCarts={setCarts} />
                    ))

                }
            </div>
    </div>
  )
}
