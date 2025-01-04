import Image from "next/image";

import phoneExperience from "@/public/Phone Experience.png";
import desktopExperience from "@/public/Desktop Experience.png";

export default function Experience() {
  return (
    <div className="relative w-full flex flex-col gap-5 items-center justify-center p-3 sm:p-0 bg-no-repeat bg-center bg-cover bg-experience">
      <h2 className="text-2xl sm:text-3xl font-bold text-white my-8">
        UmagaineTN 2025 <span className="text-secondary">Experience</span>
      </h2>

      {/* Mobile version */}
      <Image
        src={phoneExperience}
        alt="Phone Experience"
        className="w-full rounded sm:hidden"
        sizes="(max-width: 640px) 100vw"
        priority
      />

      {/* Desktop version */}
      <Image
        src={desktopExperience}
        alt="Desktop Experience"
        className="rounded hidden sm:block w-4/5"
        sizes="(min-width: 641px) 80vw"
        priority
      />
    </div>
  );
}
