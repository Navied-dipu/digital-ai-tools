import user from '../assets/user.png'
import pack from '../assets/package.png'
import rocket from '../assets/rocket.png'

export default function Steps() {
    return (
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 my-5'>

            <div className="card bg-base-100  shadow-lg">
                <div className='flex justify-end mx-2 my-3'>
                    <div className='bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center w-full px-2 py-1 max-w-max'>
                        <p className='text-white'>01</p>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10 ">
                        <img
                            src={user}
                            alt="Shoes"
                            className="rounded-xl " />
                    </figure>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Create Account</h2>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
            </div>
            <div className="card bg-base-100  shadow-lg">
                <div className='flex justify-end mx-2 my-3'>
                    <div className='bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center w-full px-2 py-1 max-w-max'>
                        <p className='text-white'>02</p>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10 ">
                        <img
                            src={pack}
                            alt="Shoes"
                            className="rounded-xl " />
                    </figure>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Choose Products</h2>
                    <p>Browse our catalog and select the tools
                        that fit your needs.</p>

                </div>
            </div>
            <div className="card bg-base-100  shadow-lg">
                <div className='flex justify-end mx-2 my-3'>
                    <div className='bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center w-full px-2 py-1 max-w-max'>
                        <p className='text-white'>03</p>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10 ">
                        <img
                            src={rocket}
                            alt="Shoes"
                            className="rounded-xl " />
                    </figure>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Start Creating</h2>
                    <p>Download and start using your premium
                        tools immediately.</p>

                </div>
            </div>
        </div>
    )
}
