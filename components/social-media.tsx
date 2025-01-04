import Link from "next/link";

import AnimateUp from "./animate-up";
import { facebookLink, instagramLink, twitterLink, youtubeLink } from "@/links";

export default function SocialMedia() {
  const links = [
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      ),
      path: facebookLink,
      label: "Follow us on Facebook",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M16.5 7.5l0 .01"></path>
        </svg>
      ),
      path: instagramLink,
      label: "Follow us on Instagram",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      ),
      path: twitterLink,
      label: "Follow us on Twitter",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
          <path d="M10 9l5 3l-5 3z"></path>
        </svg>
      ),
      path: youtubeLink,
      label: "Follow us on YouTube",
    },
  ];

  return (
    <div className="w-full min-h-80 h-full flex flex-col items-center justify-center gap-5 my-5 bg-social bg-cover bg-no-repeat bg-center">
      <h2 className="font-semibold text-xl text-primary">FOLLOW US ON</h2>
      <AnimateUp>
        <ul className="flex gap-4">
          {links.map(({ name, path, label }, index) => (
            <li
              key={index}
              className="border-2 border-white p-1 rounded-full hover:bg-primary hover:text-white"
            >
              <Link
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </AnimateUp>
    </div>
  );
}
