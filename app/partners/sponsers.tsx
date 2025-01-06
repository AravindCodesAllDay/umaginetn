import Image from "next/image";

import sponsor from "@/public/sponsor_img.webp";
import { sponsors } from "@/sponsors";

export default function Sponsors() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full text-white">
      <Image
        src={sponsor}
        alt="background"
        className=" inset-0 w-full h-full object-cover -z-10 min-h-96"
        priority
      />

      <div className="absolute">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-widest">Who Helps Us</p>
          <h2 className="text-3xl font-bold">Our Sponsors</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-auto mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 px-4">
          {sponsors.map((sponsor, index) => (
            <Image
              key={index}
              src={sponsor.photo}
              alt={sponsor.name}
              className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
