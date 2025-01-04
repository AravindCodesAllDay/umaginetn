import Image from "next/image";

import header1 from "@/public/header1.jpg";
import header2 from "@/public/header2.jpg";
import { registrationLink } from "@/links";
import Link from "next/link";
import Countdown from "./countdown";

export default function Header() {
  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="absolute flex flex-col justify-center items-center w-full md:gap-2 lg:gap-4 xl:gap-8 md:translate-y-10">
          <h1 className="flex flex-col gap-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
            <span className="text-primary">Embark on a Journey</span>
            <span className="text-primary">of Transformation</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            A Government of Tamil Nadu Initiative
          </p>
          <Link
            href={registrationLink}
            className="p-2 px-4 text-lg bg-primary hover:bg-secondary rounded text-white font-semibold transition-colors duration-200 ease-in-out scale-75 md:scale-85 lg:scale-100"
          >
            Register Now
          </Link>
          <Countdown />
          <div>
            <p className="flex justify-center items-center gap-2 text-lg scale-85 md:scale-100 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <span>Jan 09 - 10, 2025</span>
            </p>
            <Link
              href="#directions"
              className="flex justify-center gap-1 items-center text-lg scale-85 md:scale-100 hover:text-primary cursor-pointer"
            >
              <span>Chennai Trade Centre</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4 translate-y-[1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Image
          src={header2}
          alt="header"
          className="w-full object-cover h-full -z-10"
          loading="lazy"
        />
      </div>
      <Image
        src={header1}
        alt="header"
        priority
        className="w-full object-cover h-full"
      />
    </div>
  );
}
