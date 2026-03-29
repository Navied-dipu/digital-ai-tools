
import { CiPlay1 } from "react-icons/ci";
import banner from "../assets/banner.png";
export default function Hero() {
    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="max-w-sm rounded-lg shadow-2xl" src={banner} alt="" />
                    <div className="space-x-2" >
                        <div className="py-1 px-2 flex justify-evenly items-center space-x-1 bg-purple-100 max-w-max rounded-full mb-5">
                            <div className="rounded-full flex justify-center items-center bg-purple-300 p-1">
                                <div className="rounded-full bg-purple-700 p-1">

                                </div>
                            </div>
                            <p className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>
                        </div>
                        <h1 className="text-5xl font-bold">Supercharge Your <br />
                            Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>
                        <button className="btn text-white rounded-full bg-gradient-to-b from-[#4F39F6] to-[#9514FA] mr-2">Explore Products</button>
                        <button className="btn rounded-full hover:bg-gradient-to-b from-[#4F39F6] to-[#9514FA] hover:text-white"><CiPlay1 /> Watch Demo</button>
                    </div>
                </div>
            </div></div>
    )
}
