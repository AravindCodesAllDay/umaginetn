"use client";

import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function SpeakerCard({
  speaker,
}: {
  speaker: {
    id: string;
    name: string;
    photo: StaticImageData;
    role: string;
    company: string;
  };
}) {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  if (!currentPath) return null;

  return (
    <div className="flex flex-col items-center text-center transition-all duration-200 ease-in-out">
      <div
        className="relative group flex justify-center items-center text-primary transition-all duration-150 ease-in-out cursor-pointer"
        onClick={() =>
          router.push(
            `/speakers/${speaker.id}?from=${encodeURIComponent(currentPath)}`,
            {
              scroll: false,
            }
          )
        }
      >
        <Image
          src={speaker.photo}
          alt={speaker.name}
          className="rounded-full size-32 md:size-52 group-hover:opacity-60 object-cover"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 absolute hidden group-hover:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <h4 className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
        {speaker.name}
      </h4>
      <p className="text-xs text-primary">{speaker.role}</p>
      <p className="text-xs text-primary">{speaker.company}</p>
    </div>
  );
}
