import { Suspense } from "react";
import dynamic from "next/dynamic";
import AnimateUp from "@/components/animate-up";
import { eventSpeakers } from "@/speakers";

const SpeakerCard = dynamic(() => import("./speaker-card"));

export default function EventSpeakers() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start my-8 w-5/6 mx-auto">
      {eventSpeakers.map((speaker) => (
        <Suspense key={speaker.id} fallback={<SpeakerCardSkeleton />}>
          <AnimateUp>
            <SpeakerCard speaker={speaker} />
          </AnimateUp>
        </Suspense>
      ))}
    </div>
  );
}

function SpeakerCardSkeleton() {
  return (
    <div className="flex flex-col items-center text-center animate-pulse">
      <div className="rounded-full bg-gray-300 w-32 h-32 md:w-52 md:h-52 mb-4"></div>
      <div className="h-4 bg-gray-300 w-20 mb-2"></div>
      <div className="h-3 bg-gray-300 w-16"></div>
    </div>
  );
}
