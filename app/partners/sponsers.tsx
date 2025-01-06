import Image from "next/image";
import { sponsors } from "@/sponsors";

export default function Sponsors() {
  return (
    <div className="relative min-h-96 p-6 flex flex-col items-center justify-center w-full bg-sponsor bg-cover bg-center bg-no-repeat">
      <h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
        Our <span className="text-primary">Prestigious Sponsors</span>
      </h2>

      <div className="flex flex-col gap-16 w-full max-w-5xl px-4">
        {sponsors.map((involve, involveIndex) => (
          <div
            key={involveIndex}
            className="w-full flex flex-col gap-6 items-center sm:items-start"
          >
            <h3 className="text-xl text-primary font-semibold text-center sm:text-left">
              {involve.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 justify-center w-full">
              {involve.sponsors.map((sponsor, sponsorIndex) => (
                <div
                  className="size-20 sm:size-32 md:size-40 relative"
                  key={sponsorIndex}
                >
                  <Image
                    src={sponsor.photo}
                    alt={sponsor.name}
                    fill
                    sizes="(max-width: 640px) 80px, 
                           (max-width: 768px) 100px, 
                           (max-width: 1024px) 120px, 
                           150px"
                    className="object-contain hover:scale-105 transition-all duration-200 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
