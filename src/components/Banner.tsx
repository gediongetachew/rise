import banner from "../../assets/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="relative flex w-full h-[350px] mt-10 mb-20">
      <Image
        className="object-cover mt-10 "
        layout="fill"
        src={banner}
        alt="banner"
      />
      <div className="absolute inset-0 flex items-baseline object-left space-x-10 mt-64 ml-10 ">
        <div className="flex flex-col items-center justify-between">
          <h1 className="font-bold text-white text-2xl">+71%</h1>
          <p className="text-white text-xl">
            Top 5 Medical Equipment <br /> Imports
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="font-bold text-white text-2xl">+1.5K</h1>
          <p className="text-white text-xl">Happy Customer</p>
        </div>
      </div>
      <div className="absolute right-36 flex flex-col items-end justify-end mt-20 space-y-3 ">
        <p className="text-white text-xl pr-40 ">Happy Customer</p>
        <h1 className="font-bold text-white text-2xl">
          Lorem ipsum dolor sit amet
          <br /> consectetur. Mauris mollis.
        </h1>
      </div>
    </div>
  );
}
