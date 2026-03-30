export default function Rating() {
  return (
    <div className="my-5 bg-gradient-to-b from-[#4F39F6] to-[#9514FA] py-5 text-white font-bold text-4xl ">
      <div className="max-w-5xl mx-auto flex justify-evenly items-center">

        <p className="text-center">
          50k+ <br /> <span className="text-xl font-normal">Users </span>
        </p>

        <span className="text-6xl">|</span>

        <p className="text-center">
          200+ <br /> <span className="text-xl font-normal">Premium Tools </span>
        </p>

        <span className="text-6xl">|</span>

        <p className="text-center">
          4.9 <br /> <span className="text-xl font-normal">Rating </span>
        </p>
      </div>

    </div>
  );
}